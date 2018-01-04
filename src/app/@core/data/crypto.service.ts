import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { APP_CONFIG, AppConfig } from '../../app-config.module';
import { Balance, MarketSummary, MarketSummaryOverview, CurrencyValue, HistoryTransaction, HistoryOrder, BittrexResponse } from '../models/bittrex.models';

@Injectable()
export class CryptoService {

    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {
    }

    public getMarkets = () => {
        return this.http.get<MarketSummaryOverview>(this.config.baseUrl + '/getMarkets').catch(this.handleBittrexError);
    }

    public getBalances = () => {
        return this.http.post<Balance[]>(this.config.baseUrl + '/getBalances', this.config.apiconfig).map(balances => {
            balances.map(balance => {
                balance.currencyValue = new CurrencyValue(balance.currencyValue.usd, balance.currencyValue.eur);
            });
            return balances;
        }).catch(this.handleBittrexError);
    }

    public getDepositHistory = (currency?: string) => {
        const postData: any = this.config.apiconfig;
        postData.currency = currency;
        return this.http.post<HistoryTransaction[]>(this.config.baseUrl + '/getDepositHistory', postData).map(deposits => {
            deposits.map(deposit => {
                deposit.currencyValue = new CurrencyValue(deposit.currencyValue.usd, deposit.currencyValue.eur);
            });
            return deposits;
        }).catch(this.handleBittrexError);
    }

    public getWithdrawalHistory = (currency?: string) => {
        const postData: any = this.config.apiconfig;
        postData.currency = currency;
        return this.http.post<HistoryTransaction[]>(this.config.baseUrl + '/getWithdrawalHistory', postData).map(withdrawals => {
            withdrawals.map(withdrawal => {
                withdrawal.currencyValue = new CurrencyValue(withdrawal.currencyValue.usd, withdrawal.currencyValue.eur);
            });
            return withdrawals;
        }).catch(this.handleBittrexError);
    }

    public getPriceHistory = (crypto: string, currencies: string[], date: Date) => {
        const postData = {
            crypto: crypto,
            currencies: currencies,
            date: date
        };
        return this.http.post<CurrencyValue>(this.config.baseUrl + '/getPriceHistory', postData).catch(this.handleBittrexError);
    }

    public getOrderHistory = (market?: string) => {
        const postData: any = this.config.apiconfig;
        postData.market = market;
        return this.http.post<HistoryOrder[]>(this.config.baseUrl + '/getOrderHistory', postData).map(orders => {
            orders.map(order => {
                order.currencyValue = new CurrencyValue(order.currencyValue.usd, order.currencyValue.eur);
            });
            return orders;
        }).catch(this.handleBittrexError);
    }

    private handleBittrexError = (err): Observable<BittrexResponse> => {
        return Observable.throw(err.error);
    }
}
