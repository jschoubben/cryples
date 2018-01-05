require('../utils/date.extensions');
const express = require('express');
const router = express.Router();
const jsonHelper = require('../utils/json');
const apicache = require('apicache');
const memCache = require('memory-cache');
const q = require('q');
const bittrex = require('node-bittrex-api');

const cache = apicache.options({
    debug: false, // if true, enables console output
    defaultDuration: '1 hour', // should be either a number (in ms) or a string, defaults to 1 hour
    enabled: false, // if false, turns off caching globally (useful on dev)
    headerBlacklist: [], // list of headers that should never be cached
    statusCodes: {
        exclude: [], // list status codes to specifically exclude (e.g. [404, 403] cache all responses unless they had a 404 or 403 status)
        include: [200], // list status codes to require (e.g. [200] caches ONLY responses with a success/200 code)
    },
    headers: {
        // 'cache-control':  'no-cache' // example of header overwrite
    }
}).middleware;
let response;
let body;
let dashboard = null;

router.post('/getDashboardInfo', cache(), (req, res) => {
    response = res;
    body = req.body;
    if (tryInitializePrivateCall()) {
        fetchBalances()
            .then(fetchMarkets)
            .then(fetchOrders)
            .then(fetchDeposits)
            .then(fetchWithdrawals)
            .then(function () {
                res.send(dashboard);
            })
            .catch(err => {
                res.status(500).send({
                    error: err
                });
            });
    }
});

fetchMarkets = () => {
    var deferred = q.defer();
    bittrex.getmarketsummaries(
        (data, err) => handleBittrexResponse(data, err, (markets) => {
            var totalValue = {
                usd: 0,
                btc: 0
            };
            dashboard.usdBtcMarket = markets.filter((m) => m.marketName.startsWith('USDT') && m.marketName.endsWith('BTC'))[0];
            dashboard.balances.forEach((b) => {
                b.market = markets.filter((m) => m.marketName.startsWith('BTC') && m.marketName.endsWith(b.currency))[0];
                var totalBtc = b.market ? b.balance * b.market.last : b.currency === 'BTC' ? b.balance : b.balance / dashboard.usdBtcMarket.last;
                b.totalValue = {
                    btc: totalBtc,
                    usd: totalBtc * dashboard.usdBtcMarket.last
                };
                totalValue.btc += b.totalValue.btc;
                totalValue.usd += b.totalValue.usd;
            });
            dashboard.totalValue = totalValue;
            deferred.resolve();
        })
    );
    return deferred.promise;
};

fetchBalances = function () {
    var deferred = q.defer();
    bittrex.getbalances((data, err) => handleBittrexResponse(data, err, (balances) => {
        dashboard = {
            balances: balances.filter(b => b.available > 0).map((b) => {
                return {
                    balance: b.available,
                    currency: b.currency,
                    btcMarket: null,
                    usdMarket: null,
                    transactions: []
                };
            }),
            totalValue: 0
        };
        deferred.resolve();
    }));
    return deferred.promise;
};

fetchOrders = () => {
    var deferred = q.defer();
    bittrex.getorderhistory({},
        (data, err) => handleBittrexResponse(data, err, (orders) => {
            dashboard.balances.forEach((b) => {
                b.totalSellValue = 0;
                b.totalBuyValue = 0;
                b.transactions = b.transactions.concat(orders.filter((o) => o.exchange.endsWith(b.currency)).map((o) => {
                    var isBuyOrder = o.orderType === 'LIMIT_BUY';
                    if (isBuyOrder) {
                        b.totalBuyValue += o.price;
                    } else {
                        b.totalSellValue += o.price;
                    }
                    return {
                        currency: o.exchange.substr(0, o.exchange.indexOf('-')),
                        amount: o.quantity - o.quantityRemaining,
                        totalPrice: o.price,
                        timestamp: new Date(o.timeStamp),
                        type: isBuyOrder ? 'BUY' : 'SELL'
                    };
                }));
            });
            deferred.resolve();
        })
    );
    return deferred.promise;
};

fetchDeposits = () => {
    var deferred = q.defer();
    bittrex.getdeposithistory({},
        (data, err) => handleBittrexResponse(data, err, (deposits) => {
            var priceHistoryPromises = [];
            dashboard.balances.forEach((b) => {
                b.totalDepositValue = 0;
                b.transactions = b.transactions.concat(deposits.filter((d) => d.currency === b.currency).map((d) => {
                    b.totalDepositValue += d.amount;
                    var transaction = {
                        amount: d.amount,
                        timestamp: new Date(d.lastUpdated),
                        type: 'DEPOSIT',
                        totalPrice: {
                            usdt: 0,
                            btc: 0
                        }
                    };
                    priceHistoryPromises.push(
                        fetchTransactionPriceHistory(d.currency, transaction.timestamp).then(function (price) {
                            transaction.totalPrice.usdt = transaction.amount * price.usd;
                            transaction.totalPrice.btc = transaction.amount * price.btc;
                        })
                    );
                    return transaction;
                }));
            });
            q.all(priceHistoryPromises).then(function (results) {
                deferred.resolve();
            }, function (err) {
                deferred.reject(err);
            });
        })
    );
    return deferred.promise;
};

fetchWithdrawals = () => {
    var deferred = q.defer();
    bittrex.getwithdrawalhistory({},
        (data, err) => handleBittrexResponse(data, err, (withdrawals) => {
            var priceHistoryPromises = [];
            dashboard.balances.forEach((b) => {
                b.totalWithdrawalValue = 0;
                b.transactions = b.transactions.concat(withdrawals.filter((w) => w.currency === b.currency).map((w) => {
                    b.totalWithdrawalValue += w.amount;
                    var transaction = {
                        amount: w.amount,
                        timestamp: new Date(w.lastUpdated),
                        type: 'WITHDRAWAL',
                        totalPrice: {
                            usdt: 0,
                            btc: 0
                        }
                    };
                    priceHistoryPromises.push(
                        fetchTransactionPriceHistory(d.currency, transaction.timestamp).then(function (price) {
                            transaction.totalPrice.usdt = transaction.amount * price.usd;
                            transaction.totalPrice.btc = transaction.amount * price.btc;
                        })
                    );
                    return transaction;
                }));
            });
            q.all(priceHistoryPromises).then(function (results) {
                deferred.resolve();
            }, function (err) {
                deferred.reject(err);
            });
        })
    );
    return deferred.promise;
};

fetchTransactionPriceHistory = (currency, timestamp) => {
    var deferred = q.defer();
    var promises = [];
    var price = {
        usdt: null,
        btc: null
    };
    if (currency !== 'USDT') {
        promises.push(
            fetchPriceHistory('USDT-' + currency, timestamp).then(function (ticks) {
                let pricePerUnit = findClosestTick(ticks, transaction.timestamp).l;
                transaction.totalPrice.usdt = transaction.pricePerUnit * transaction.amount;
            })
        );
    }
    if (currency !== 'BTC') {
        promises.push(
            fetchPriceHistory('BTC-' + currency, timestamp).then(function (ticks) {
                let pricePerUnit = findClosestTick(ticks, transaction.timestamp).l;
                transaction.totalPrice.btc = transaction.pricePerUnit * transaction.amount;
            })
        );
    }
    q.all(promises).then(function (results) {
        deferred.resolve(price);
    });
    return deferred.promise;
};

fetchPriceHistory = (exchange, timeStamp) => {
    var deferred = q.defer();
    var timeInterval = tickIntervals.oneMin.minDate < timeStamp ? tickIntervals.oneMin.key :
        tickIntervals.fiveMin.minDate < timeStamp ? tickIntervals.fiveMin.key :
        tickIntervals.thirtyMin.minDate < timeStamp ? tickIntervals.thirtyMin.key :
        tickIntervals.hour.minDate < timeStamp ? tickIntervals.hour.key : tickIntervals.day.key;
    var cachedTicks = memCache.get('priceHistory_' + exchange + '_' + timeInterval);
    if (cachedTicks) {
        setTimeout(function () {
            q.resolve(cachedTicks);
        });
    } else {
        bittrex.sendCustomRequest('https://bittrex.com/Api/v2.0/pub/market/GetTicks?marketName=' + exchange + '&tickInterval=' + timeInterval + '&_=' + (new Date()).getTime(),
            (data, err) => handleBittrexResponse(data, err, (ticks) => {
                memCache.put('priceHistory_' + exchange + '_' + timeInterval, ticks);
                deferred.resolve(ticks);
            })
        );
    }
    return deferred.promise;
};

findClosestTick = (ticks, timestamp) => {
    var closestTick = {};
    for (var i = 0; i < ticks.length; i++) {
        var curDiff = Math.abs(timestamp - new Date(ticks[i].t));
        if (!closestTick.diff || curDiff < closestTick.diff) {
            closestTick = {
                diff: curDiff,
                tick: ticks[i]
            };
        }
    }
    return closestTick.tick;
};

handleBittrexResponse = (data, err, success) => {
    if (err) {
        response.status(500).send(err);
    } else {
        success(jsonHelper.toCamel(data.result));
    }
};

tryInitializePrivateCall = (success) => {
    if (!body || !body.key || !body.secret) {
        response.status(400).send('Invalid arguments specified');
        return false;
    }
    bittrex.options({
        'apikey': body.key,
        'apisecret': body.secret,
    });
    return true;
};

const tickIntervals = {
    oneMin: {
        key: 'oneMin',
        minDate: (new Date()).addDays(-10)
    },
    fiveMin: {
        key: 'fiveMin',
        minDate: (new Date()).addDays(-20)
    },
    thirtyMin: {
        key: 'thirtyMin',
        minDate: (new Date()).addDays(-40)
    },
    hour: {
        key: 'hour',
        minDate: (new Date()).addDays(-60)
    },
    day: {
        key: 'day',
        minDate: (new Date()).addDays(-750)
    }
};

module.exports = router;
