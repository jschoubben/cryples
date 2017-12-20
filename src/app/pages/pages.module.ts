import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ConfigureModule } from './configure/configure.module';
import { ThemeModule } from '../@theme/theme.module';
import { ToastrModule } from 'ngx-toastr';

const PAGES_COMPONENTS = [
    PagesComponent,
];

@NgModule({
    imports: [
        PagesRoutingModule,
        ThemeModule,
        DashboardModule,
        ConfigureModule,
        ToastrModule.forRoot()
    ],
    declarations: [
        ...PAGES_COMPONENTS,
    ],
})
export class PagesModule {
}
