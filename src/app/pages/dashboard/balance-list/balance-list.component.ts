import { Component, Input, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { Dashboard } from '../../../@core/models/bittrex.models';
import { Observable } from 'rxjs/Observable';
import { APP_CONFIG, AppConfig } from '../../../app-config.module';

@Component({
    selector: 'ngx-balances',
    styleUrls: ['./balance-list.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    templateUrl: './balance-list.component.html',
})
export class BalanceListComponent implements OnInit {
    @Input() dashboardInfo: Dashboard;
    currency: string;
    expandedBalances: number[] = [];
    tableSettings = {
        columns: {
            type: {
                title: 'Type'
            },
            amount: {
                title: 'Amount'
            },
            totalPrice: {
                title: 'Total'
            },
            currency: {
                title: 'Currency'
            }
        },
        actions: {
            add: false,
            edit: false,
            delete: false,
            custom: []
        },
        hideSubHeader: true
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
