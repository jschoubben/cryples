import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { APP_CONFIG, AppConfig } from '../../app-config.module';

@Component({
    selector: 'ngx-configure',
    styleUrls: ['./configure.component.scss'],
    templateUrl: './configure.component.html',
})
export class ConfigureComponent {
    apikey: string;
    apisecret: string;

    constructor(private router: Router, @Inject(APP_CONFIG) private config: AppConfig) {
        this.apikey = localStorage.getItem('APIKEY');
        this.apisecret = localStorage.getItem('APISECRET');
    }

    public saveKey = (value) => {
        localStorage.setItem('APIKEY', (value || this.apikey));
        this.config.apiconfig.key = (value || this.apikey);
    };

    public saveSecret = (value) => {
        localStorage.setItem('APISECRET', (value || this.apisecret));
        this.config.apiconfig.secret = (value || this.apisecret);
    };
}
