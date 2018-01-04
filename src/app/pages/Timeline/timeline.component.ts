import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { APP_CONFIG, AppConfig } from '../../app-config.module';
import { CryptoService } from '../../@core/data/crypto.service';
import { Balance, MarketSummary, HistoryOrder, CurrencyValue, HistoryTransaction } from '../../@core/models/bittrex.models';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'ngx-timeline',
    styleUrls: ['./timeline.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    templateUrl: './timeline.component.html',
})
export class TimelineComponent {
    private orders: HistoryOrder[];
    private currencyTransations: HistoryTransaction[];

    constructor(
        private router: Router, @Inject(APP_CONFIG)
        private config: AppConfig,
        private cryptoService: CryptoService,
        private toastr: ToastrService) {
        if (!config.apiconfig.key || !config.apiconfig.secret) {
            router.navigate(['/pages/configure']);
            return;
        }
    }

    private handleBittrexError = (err) => {
        if (err.message === 'APIKEY_INVALID') {
            this.toastr.error('Your API key or secret is invalid. Please check the configuration page.', 'Error');
        } else {
            this.toastr.error(err.message, 'Error');
        }
        console.log(err);
    }
}
