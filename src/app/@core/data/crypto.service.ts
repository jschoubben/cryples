import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { APP_CONFIG, AppConfig } from '../../app-config.module';
import { Balance, MarketSummary, MarketOverview } from '../models/bittrex.models';

@Injectable()
export class CryptoService {

    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {
    }

    public getMarkets = function (): Observable<MarketOverview> {
        return this.http.get(this.config.baseUrl + '/getMarkets').map((data) => {
            const marketOverview = new MarketOverview();
            marketOverview.usdMarkets = data.filter(m => m.marketName.toLowerCase().startsWith('usd'));
            marketOverview.bitcoinMarkets = data.filter(m => !m.marketName.toLowerCase().startsWith('usd'));
            return marketOverview;
        });
    };

    public getBalances = function (): Observable<Balance[]> {
        return this.http.post(this.config.baseUrl + '/getBalances', this.config.apiconfig);
    };
}
