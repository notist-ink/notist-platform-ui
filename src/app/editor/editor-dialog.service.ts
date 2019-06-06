import { Injectable }              from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { EditorComponent }         from './editor.component';

@Injectable({
    providedIn: 'root'
})
export class EditorDialogService {

    private ref: MatDialogRef<EditorComponent>;

    public constructor(private matDialog: MatDialog) {

    }

    public open(): void {

        this.ref = this.matDialog.open(EditorComponent, {

            width: '1500px',
            height: '700px',

        });

    }

}
