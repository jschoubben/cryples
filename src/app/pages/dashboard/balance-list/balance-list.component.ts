import { Component, Input, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { Balance, CurrencyValue, TransactionType, Transaction } from '../../../@core/models/bittrex.models';
import { Observable } from 'rxjs/Observable';
import { APP_CONFIG, AppConfig } from '../../../app-config.module';

@Component({
    selector: 'ngx-balances',
    styleUrls: ['./balance-list.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    templateUrl: './balance-list.component.html',
})
export class BalanceListComponent implements OnInit {
    @Input() balances: Balance[];
    @Input() totalWalletValue: CurrencyValue;
    @Input() totalDepositValue: CurrencyValue;
    @Input() totalWithdrawalValue: CurrencyValue;
    @Input() totalProfitValue: CurrencyValue;
    @Input() totalBtcBalance: number;
    currency: string;
    expandedBalances: number[] = [];
    tableSettings = {
        columns: {
            type: {
                title: 'Type',
                valuePrepareFunction: (value) => {
                    if (value)
                        return TransactionType[value];
                    else
                        return '/';
                }
            },
            amount: {
                title: 'Amount'
            },
            price: {
                title: 'Price',
                valuePrepareFunction: (value: number) => {
                    if (typeof value === 'object')
                        return value[this.currency].toFixed(2);
                    else
                        return value;
                }
            },
            total: {
                title: 'Total',
                valuePrepareFunction: (value: number) => {
                    if (typeof value === 'object')
                        return value[this.currency].toFixed(2);
                    else
                        return value;
                }
            }
        },
        actions: {
            add: false,
            edit: false,
            delete: false,
            custom: []
        }
    };

    constructor( @Inject(APP_CONFIG) private config: AppConfig) {
        this.currency = config.currency;
    }

    ngOnInit = function () { };

    toggleCard = (index) => {
        const indexOf = this.expandedBalances.indexOf(index);
        if (indexOf >= 0) {
            this.expandedBalances.splice(indexOf, 1);
        } else {
            this.expandedBalances.push(index);
        }
    }
}
