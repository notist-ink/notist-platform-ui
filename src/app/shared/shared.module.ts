import { CommonModule }          from '@angular/common';
import { NgModule }              from '@angular/core';
import { ReactiveFormsModule }   from '@angular/forms';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule
}                                from '@angular/material';
import { ResizableModule }       from 'angular-resizable-element';
import { TagsSelectorComponent } from './tags-selector/tags-selector.component';

@NgModule({

    declarations: [

        TagsSelectorComponent

    ],

    imports: [

        CommonModule,

        MatAutocompleteModule,
        MatButtonModule,
        MatChipsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,

        ReactiveFormsModule,
        ResizableModule

    ],

    exports: [

        CommonModule,

        MatAutocompleteModule,
        MatButtonModule,
        MatChipsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,

        ReactiveFormsModule,
        ResizableModule,

        TagsSelectorComponent

    ],

})
export class SharedModule {
}
