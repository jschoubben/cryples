import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { APP_CONFIG, AppConfig } from '../../app-config.module';
import { NbThemeService } from '@nebular/theme';
import { SwitchOptions } from '../../@theme/components/switch/switch.component';

@Component({
    selector: 'ngx-configure',
    styleUrls: ['./configure.component.scss'],
    templateUrl: './configure.component.html',
})
export class ConfigureComponent {
    apikey: string = localStorage.getItem('APIKEY');
    apisecret: string = localStorage.getItem('APISECRET');
    themes: SwitchOptions = {
        option1: 'cosmic',
        option2: 'default'
    };
    selectedTheme: string = localStorage.getItem('DEFAULT_THEME');
    currencies: SwitchOptions = {
        option1: 'usd',
        option2: 'eur'
    };
    selectedCurrency: string = localStorage.getItem('CURRENCY');

    constructor(private router: Router, @Inject(APP_CONFIG) private config: AppConfig, private themeService: NbThemeService) {
    }

    themeChanged(theme) {
        this.themeService.changeTheme(theme);
    }

    currencyChanged(currency) {
        this.config.currency = currency;
    }

    public saveKey(value) {
        localStorage.setItem('APIKEY', (value || this.apikey));
        this.config.apiconfig.key = (value || this.apikey);
    }

    public saveSecret(value) {
        localStorage.setItem('APISECRET', (value || this.apisecret));
        this.config.apiconfig.secret = (value || this.apisecret);
    }
}
