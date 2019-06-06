import { CommonModule }                                                                          from '@angular/common';
import { NgModule }                                                                              from '@angular/core';
import { ReactiveFormsModule }                                                                   from '@angular/forms';
import { MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';

@NgModule({

    imports: [

        CommonModule,

        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDialogModule,

        ReactiveFormsModule,

    ],

    exports: [

        CommonModule,

        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDialogModule,

        ReactiveFormsModule,

    ]

})
export class SharedModule {
}
