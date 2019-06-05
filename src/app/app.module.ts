import { NgModule }        from '@angular/core';
import { BrowserModule }   from '@angular/platform-browser';
import { HeaderComponent } from './_layout/header/header.component';

import { AppComponent } from './app.component';

@NgModule({

    declarations: [

        AppComponent,

        HeaderComponent

    ],

    imports: [

        BrowserModule,
        // QuillModule

    ],

    providers: [],
    bootstrap: [ AppComponent ]

})
export class AppModule {
}
