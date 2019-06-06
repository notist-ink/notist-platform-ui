import { NgModule }                          from '@angular/core';
import { MatDialogModule, MatTooltipModule } from '@angular/material';
import { BrowserModule }                     from '@angular/platform-browser';
import { BrowserAnimationsModule }           from '@angular/platform-browser/animations';
import { RouterModule }                      from '@angular/router';
import { HeaderComponent }                   from './_layout/header/header.component';
import { LeftMenuSidebarComponent }          from './_layout/left-menu-sidebar/left-menu-sidebar.component';
import { SidebarComponent }                  from './_layout/sidebar/sidebar.component';

import { AppComponent }      from './app.component';
import { BooksComponent }    from './books/books.component';
import { EditorModule }      from './editor/editor.module';
import { HomeComponent }     from './home/home.component';
import { NotesComponent }    from './notes/notes.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({

    declarations: [

        AppComponent,
        HeaderComponent,
        HomeComponent,
        SidebarComponent,
        LeftMenuSidebarComponent,
        SettingsComponent,
        NotesComponent,
        BooksComponent

    ],

    imports: [

        BrowserModule,
        BrowserAnimationsModule,
        EditorModule,
        MatDialogModule,
        MatTooltipModule,

        RouterModule.forRoot([

            {

                path: 'books',
                component: BooksComponent

            }, {

                path: 'home',
                component: HomeComponent

            }, {

                path: 'notes',
                component: NotesComponent

            }, {

                path: 'settings',
                component: SettingsComponent

            }, {

                path: '',
                pathMatch: 'full',
                redirectTo: 'home'

            }

        ])

    ],

    providers: [],
    bootstrap: [ AppComponent ]

})
export class AppModule {
}
