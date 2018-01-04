const express = require('express');
const router = express.Router();
const jsonHelper = require('../utils/json');
const apicache = require('apicache');
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

const q = require('q');

const cc = require('cryptocompare');
//const cc = require('../utils/mock/cryptocompare');
const bittrex = require('node-bittrex-api');
let response;
let body;
const onlyStatus200 = (req, res) => res.statusCode === 200;

router.get('/getMarkets', cache(), (req, res) => {
    response = res;
    body = req.body;
    bittrex.getmarketsummaries(
        (data, err) => handleBittrexResponse(data, err,
            (markets) => {
                const marketOverview = {
                    usdMarkets: markets.filter(m => m.marketName.startsWith('USDT')),
                    btcMarkets: markets.filter(m => !m.marketName.startsWith('USDT'))
                };
                res.send(marketOverview);
            }
        )
    );
});

router.post('/getBalances', cache(), (req, res) => {
    response = res;
    body = req.body;
    if (tryInitializePrivateCall()) {
        bittrex.getbalances((data, err) => handleBittrexResponse(data, err,
            (balances) => {
                bittrex.getmarketsummaries(
                    (marketSummaries, err) => handleBittrexResponse(marketSummaries, err,
                        (markets) => {
                            balances.map(
                                (b) => {
                                    b.usdMarket = markets.filter((m) => m.marketName.startsWith('USDT') && m.marketName.endsWith(b.currency))[0];
                                    b.btcMarket = markets.filter((m) => m.marketName.startsWith('BTC') && m.marketName.endsWith(b.currency))[0];
                                }
                            );
                            fetchPrices(balances)
                                .then((data) => res.send(data))
                                .catch(handleCryptoCompareError);
                        }
                    )
                );
            }
        ));
    }
});

router.post('/getDepositHistory', cache(), (req, res) => {
    response = res;
    body = req.body;
    if (tryInitializePrivateCall()) {
        bittrex.getdeposithistory(body.currency || {},
            (data, err) => handleBittrexResponse(data, err,
                (deposits) => {
                    if (deposits.length) {
                        deposits.map(deposit => {
                            deposit.transactionDate = new Date(deposit.lastUpdated);
                        });
                        fetchPrices(deposits)
                            .then((data) => res.send(data))
                            .catch(handleCryptoCompareError);
                    } else {
                        res.send([]);
                    }
                }
            )
        );
    }
});

router.post('/getWithdrawalHistory', cache(), (req, res) => {
    response = res;
    body = req.body;
    if (tryInitializePrivateCall()) {
        bittrex.getwithdrawalhistory(body.currency || {},
            (data, err) => handleBittrexResponse(data, err,
                (withdrawals) => {
                    if (withdrawals.length) {
                        withdrawals.map(withdrawal => {
                            withdrawal.transactionDate = new Date(withdrawal.lastUpdated);
                        });
                        fetchPrices(withdrawals)
                            .then((data) => res.send(data))
                            .catch(handleCryptoCompareError);
                    } else {
                        res.send([]);
                    }
                }
            )
        );
    }
});

router.post('/getOrderHistory', cache(), (req, res) => {
    response = res;
    body = req.body;
    if (tryInitializePrivateCall()) {
        bittrex.getorderhistory(body.market || {},
            (data, err) => handleBittrexResponse(data, err,
                (orders) => {
                    if (orders.length) {
                        orders.map(o => {
                            o.currency = o.exchange.startsWith('USDT') ? o.exchange.substr(5) : o.exchange.substr(4);
                            o.transactionDate = new Date(o.timeStamp);
                        });
                        fetchPrices(orders)
                            .then((data) => res.send(data))
                            .catch(handleCryptoCompareError);
                    } else {
                        res.send([]);
                    }
                }
            )
        );
    }
});

router.post('/getPriceHistorical', cache(), (req, res) => {
    const body = req.body;
    cc.priceHistorical(body.crypto, body.curreny, body.date)
        .then(price => res.send(price))
        .catch(err => res.status(500).send({
            success: false,
            message: err,
            result: null
        }));
});

handleBittrexResponse = (data, err, success) => {
    if (err) {
        response.status(500).send(err);
    } else {
        success(jsonHelper.toCamel(data.result));
    }
};

handleCryptoCompareError = (err) => {
    response.status(500).send({
        success: false,
        message: err,
        result: null
    });
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

fetchPrices = (currencyObjects, deferred = null, data = []) => {
    if (deferred === null) {
        deferred = q.defer();
    }
    if (currencyObjects.length === 0) {} else {
        const co = currencyObjects[0];
        currencyObjects = currencyObjects.splice(1);
        cc.priceHistorical(co.currency === 'BCC' ? 'BCH' : co.currency, ['USD', 'EUR'], co.transactionDate || new Date())
            .then((price) => {
                co.currencyValue = jsonHelper.toCamel(price);
                data.push(co);
                if (currencyObjects.length === 0) {
                    deferred.resolve(data);
                } else {
                    setTimeout(() => {
                        fetchPrices(currencyObjects, deferred, data);
                    }, 100);
                }
            }).catch((err) => {
                deferred.reject(err.message || err);
            });
    }
    if (deferred !== null) {
        return deferred.promise;
    }
};

module.exports = router;
