import { NgModule }        from '@angular/core';
import { BrowserModule }   from '@angular/platform-browser';
import { QuillModule }     from 'ngx-quill';
import { HeaderComponent } from './_layout/header/header.component';

import { AppComponent } from './app.component';
import { SidebarComponent } from './_layout/sidebar/sidebar.component';

@NgModule({

    declarations: [

        AppComponent,

        HeaderComponent,

        SidebarComponent

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
