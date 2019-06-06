import { CommonModule }                    from '@angular/common';
import { NgModule }                        from '@angular/core';
import { MatDialogModule, MatInputModule } from '@angular/material';
import { QuillModule }                     from 'ngx-quill';
import { EditorComponent }                 from './editor.component';

@NgModule({

    declarations: [

        EditorComponent

    ],

    imports: [

        CommonModule,
        MatDialogModule,
        MatInputModule,
        QuillModule,

    ],

    entryComponents: [

        EditorComponent

    ]

})
export class EditorModule {
}
