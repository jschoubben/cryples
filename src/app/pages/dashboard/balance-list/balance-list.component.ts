import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Balance, Market } from '../../../@core/models/bittrex.models';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'ngx-balances',
    styleUrls: ['./balance-list.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    templateUrl: './balance-list.component.html',
})
export class BalanceListComponent implements OnInit {

    @Input() balances: Balance[];

    ngOnInit = function () {
    };
}
