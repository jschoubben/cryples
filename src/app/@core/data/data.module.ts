import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XHRBackend, RequestOptions } from '@angular/http';

import { StateService } from './state.service';
import { CryptoService } from './crypto.service';

const SERVICES = [
    StateService,
    CryptoService
];

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        ...SERVICES,
    ]
})
export class DataModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: DataModule,
            providers: [
                ...SERVICES,
            ]
        };
    }
}
