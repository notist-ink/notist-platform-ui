import { Component }     from '@angular/core';
import { ThemesService } from '../../_lib/themes.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: [ './sidebar.component.scss' ]
})
export class SidebarComponent {

    public constructor(public themesService: ThemesService) {
    }

}
