import { Component }              from '@angular/core';
import { ThemesService }          from '../../_lib/themes.service';
import { LeftMenuSidebarService } from './left-menu-sidebar.service';

@Component({
    selector: 'app-left-menu-sidebar',
    templateUrl: './left-menu-sidebar.component.html',
    styleUrls: [ './left-menu-sidebar.component.scss' ]
})
export class LeftMenuSidebarComponent {

    public constructor(private leftMenuSidebarService: LeftMenuSidebarService,
                       public themesService: ThemesService) {

    }

}
