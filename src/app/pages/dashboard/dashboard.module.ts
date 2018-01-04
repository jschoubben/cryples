import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { BalanceListComponent } from './balance-list/balance-list.component';

import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
    imports: [
        ThemeModule,
        Ng2SmartTableModule
    ],
    declarations: [
        DashboardComponent,
        BalanceListComponent
    ],
})
export class DashboardModule { }
