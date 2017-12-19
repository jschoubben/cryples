import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { BalanceListComponent } from './balance-list/balance-list.component';


@NgModule({
    imports: [
        ThemeModule,
    ],
    declarations: [
        DashboardComponent,
        BalanceListComponent,
    ],
})
export class DashboardModule { }
