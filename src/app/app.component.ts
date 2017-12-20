/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
    selector: 'ngx-app',
    template: '<router-outlet></router-outlet>',
})
export class AppComponent {

    constructor(private themeService: NbThemeService) {
        themeService.changeTheme(localStorage.getItem('DEFAULT_THEME') || 'default');
    }
}
