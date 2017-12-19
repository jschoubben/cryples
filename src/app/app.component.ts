/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { APP_CONFIG, AppConfig } from './app-config.module';

@Component({
    selector: 'ngx-app',
    template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

    constructor(
        private router: Router,
        @Inject(APP_CONFIG) private config: AppConfig
    ) {
        if (!config.apiconfig.key || !config.apiconfig.secret) {
            router.navigate(['/pages/configure']);
        }
    }

    ngOnInit(): void {
    }
}
