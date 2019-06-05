import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QuillModule }   from 'ngx-quill';

import { AppComponent } from './app.component';
import { HeaderComponent } from './_layout/header/header.component';

@NgModule({

    declarations: [

        AppComponent,

        HeaderComponent

    ],

    imports: [

        BrowserModule,
        QuillModule

    ],

    providers: [],
    bootstrap: [ AppComponent ]

})
export class AppModule {
}
