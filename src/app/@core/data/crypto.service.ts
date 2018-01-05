import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { APP_CONFIG, AppConfig } from '../../app-config.module';
import { Dashboard, BittrexErrorResponse } from '../models/bittrex.models';

@Injectable()
export class CryptoService {

    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {
    }

    public getDashboardInfo = () => {
        return this.http.post<Dashboard[]>(this.config.baseUrl + '/getDashboardInfo', this.config.apiconfig).catch(this.handleBittrexError);
    }

    private handleBittrexError = (err): Observable<BittrexErrorResponse> => {
        return Observable.throw(err.error);
    }
}
