import { NgModule, InjectionToken } from '@angular/core';
import { environment } from '../environments/environment';

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export class AppConfig {
    baseUrl: string;
    apiconfig: ApiConfig;
}

export class ApiConfig {
    key: string;
    secret: string;
}

export const APP_DI_CONFIG: AppConfig = {
    baseUrl: '/api',
    apiconfig: {
        key: localStorage.getItem('APIKEY'),
        secret: localStorage.getItem('APISECRET')
    }
};

@NgModule({
    providers: [{
        provide: APP_CONFIG,
        useValue: APP_DI_CONFIG
    }]
})
export class AppConfigModule { }
