import { Component, Inject, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APP_CONFIG, AppConfig } from '../../app-config.module';
import { CryptoService } from '../../@core/data/crypto.service';
import { Dashboard, Balance } from '../../@core/models/bittrex.models';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'ngx-dashboard',
    styleUrls: ['./dashboard.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

    public dashboardInfo: Dashboard = {
        balances: [],
        totalValue: 0,
        usdBtcMarket: null
    };

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
        this.cryptoService.getDashboardInfo().subscribe(this.handleDashboardInfo.bind(this), this.handleBittrexError);
    }

    private handleDashboardInfo(dashboardInfo: Dashboard) {
        this.dashboardInfo = dashboardInfo;
    }

    private handleBittrexError(err) {
        if (err.message === 'APIKEY_INVALID') {
            this.toastr.error('Your API key or secret is invalid. Please check the configuration page.', 'Error');
        } else {
            this.toastr.error(err.message, 'Error');
        }
        console.log(err);
    }
}
