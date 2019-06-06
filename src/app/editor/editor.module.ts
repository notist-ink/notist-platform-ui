import { CommonModule }    from '@angular/common';
import { NgModule }        from '@angular/core';
import { QuillModule }     from 'ngx-quill';
import { SharedModule }    from '../shared/shared.module';
import { EditorComponent } from './editor.component';

@NgModule({

    declarations: [

        EditorComponent

    ],

    imports: [

        CommonModule,
        QuillModule,

        SharedModule,
        
    ],

    entryComponents: [

        EditorComponent

    ]

})
export class EditorModule {
}
