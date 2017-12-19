import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ConfigureComponent } from './configure.component';


@NgModule({
    imports: [
        ThemeModule,
    ],
    declarations: [
        ConfigureComponent
    ],
})
export class ConfigureModule { }
