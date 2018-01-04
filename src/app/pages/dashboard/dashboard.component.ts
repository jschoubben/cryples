import { Component, Inject, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APP_CONFIG, AppConfig } from '../../app-config.module';
import { CryptoService } from '../../@core/data/crypto.service';
import { Balance, MarketSummary, MarketSummaryOverview, HistoryOrder, CurrencyValue, HistoryTransaction, Transaction, MarketHistoryOverview, TransactionType } from '../../@core/models/bittrex.models';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'ngx-dashboard',
    styleUrls: ['./dashboard.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

    public balances: Balance[];
    private marketOverview: MarketSummaryOverview;
    public totalWalletValue = new CurrencyValue();
    public totalDepositValue = new CurrencyValue();
    public totalWithdrawalValue = new CurrencyValue();
    public totalProfitValue = new CurrencyValue();
    public totalBtcBalance: number = 0;

    constructor(
        private router: Router, @Inject(APP_CONFIG)
        private config: AppConfig,
        private cryptoService: CryptoService,
        private toastr: ToastrService) {
        if (!config.apiconfig.key || !config.apiconfig.secret || !config.currency) {
            router.navigate(['/pages/configure']);
            return;
        }
    }

    ngOnInit(): void {
        this.getBalances();
        this.getMarkets();
    }

    private getBalances() {
        this.cryptoService.getBalances().subscribe(this.handleBalances.bind(this), this.handleBittrexError);
    }

    private handleBalances(balances: Balance[]) {
        this.balances = balances;
        this.balances.forEach((balance) => {
            this.totalWalletValue.add(balance.currencyValue, balance.balance);
            this.totalBtcBalance += balance.btcMarket ? balance.btcMarket.last * balance.available : balance.currency === 'BTC' ? balance.available : 0;
            balance.investedValue = new CurrencyValue();
            balance.totalBuyValue = new CurrencyValue();
            balance.totalSellValue = new CurrencyValue();
            balance.totalProfitValue = new CurrencyValue();
            balance.transactions = [];
            balance.currentValue = balance.currencyValue.multiply(balance.available);
        });
        this.totalProfitValue.add(this.totalWalletValue);
        this.cryptoService.getDepositHistory().subscribe(this.handleDepositHistory.bind(this), this.handleBittrexError);
        this.cryptoService.getWithdrawalHistory().subscribe(this.handleWithdrawalHistory.bind(this), this.handleBittrexError);
        this.cryptoService.getOrderHistory().subscribe(this.handleOrderHistory.bind(this), this.handleBittrexError);
    }

    private handleDepositHistory(deposits: HistoryTransaction[]) {
        this.balances.map((balance) => {
            balance.deposits = deposits.filter((d) => balance.currency === d.currency);
            if (balance.deposits.length) {
                balance.deposits.forEach((d) => {
                    const value = d.currencyValue.multiply(d.amount);
                    balance.investedValue.add(value);
                    this.totalDepositValue.add(value);
                    balance.transactions.push({
                        amount: d.amount,
                        price: d.currencyValue,
                        total: d.currencyValue.multiply(d.amount),
                        type: TransactionType.Deposit
                    });
                });
            }
        });
        this.totalProfitValue.subtract(this.totalDepositValue);
    }

    private handleWithdrawalHistory(withdrawals: HistoryTransaction[]) {
        this.balances.map((balance) => {
            balance.withdrawals = withdrawals.filter((w) => balance.currency === w.currency);
            if (balance.withdrawals.length) {
                balance.withdrawals.forEach((w) => {
                    const value = w.currencyValue.multiply(w.amount);
                    balance.investedValue.subtract(value);
                    this.totalWithdrawalValue.add(value);
                    balance.transactions.push({
                        amount: w.amount,
                        price: w.currencyValue,
                        total: w.currencyValue.multiply(w.amount),
                        type: TransactionType.Withdrawal
                    });
                });
            }
        });
        this.totalProfitValue.add(this.totalWithdrawalValue);
    }

    private handleOrderHistory(orders: HistoryOrder[]) {
        this.balances.map((balance) => {
            balance.buyOrders = orders.filter((o) => o.orderType === 'LIMIT_BUY' && o.currency === balance.currency);
            if (balance.buyOrders.length) {
                balance.buyOrders.forEach((o) => {
                    balance.investedValue.add(o.currencyValue, o.quantity);
                    balance.transactions.push({
                        amount: o.quantity,
                        price: o.currencyValue,
                        total: o.currencyValue.multiply(o.quantity),
                        type: TransactionType.BuyOrder
                    });
                });
            }
            balance.sellOrders = orders.filter((o) => o.orderType === 'LIMIT_SELL' && o.currency === balance.currency);
            if (balance.sellOrders.length) {
                balance.sellOrders.forEach((o) => {
                    balance.investedValue.subtract(o.currencyValue, o.quantity);
                    balance.transactions.push({
                        amount: o.quantity,
                        price: o.currencyValue,
                        total: o.currencyValue.multiply(o.quantity),
                        type: TransactionType.SellOrder
                    });
                });
            }
            balance.totalProfitValue.add(balance.currentValue);
            balance.totalProfitValue.subtract(balance.investedValue);
        });
    }

    private handleBittrexError(err) {
        if (err.message === 'APIKEY_INVALID') {
            this.toastr.error('Your API key or secret is invalid. Please check the configuration page.', 'Error');
        } else {
            this.toastr.error(err.message, 'Error');
        }
        console.log(err);
    }

    private getMarkets() {
        this.cryptoService.getMarkets().subscribe(this.handleMarkets, this.handleBittrexError);
    }

    private handleMarkets(markets: MarketSummaryOverview) {
        this.marketOverview = markets;
    }
}
