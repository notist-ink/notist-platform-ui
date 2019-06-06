import { Injectable }      from '@angular/core';
import { MatDialog }       from '@angular/material';
import { EditorComponent } from './editor.component';

@Injectable({
    providedIn: 'root'
})
export class EditorDialogService {

    public constructor(private matDialog: MatDialog) {

    }

    public open(): void {

        this.matDialog.open(EditorComponent, {

            width: '1500px',
            height: '700px',

        });

    }

}
