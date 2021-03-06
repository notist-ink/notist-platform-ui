import { AfterContentInit, Component } from '@angular/core';
import { ThemesService }               from './_lib/themes.service';
import { EditorDialogService }         from './editor/editor-dialog.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements AfterContentInit {

    public constructor(private editorDialogService: EditorDialogService,
                       public themesService: ThemesService) {

    }

    public ngAfterContentInit(): void {

        this.editorDialogService.open();

    }

}
