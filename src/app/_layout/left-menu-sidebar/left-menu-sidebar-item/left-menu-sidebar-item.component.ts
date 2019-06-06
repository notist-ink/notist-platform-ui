import { Component, Input } from '@angular/core';
import { Note }             from '../../../_lib/Note';

@Component({
    selector: 'app-left-menu-sidebar-item',
    templateUrl: './left-menu-sidebar-item.component.html',
    styleUrls: [ './left-menu-sidebar-item.component.scss' ]
})
export class LeftMenuSidebarItemComponent {

    @Input() public note: Note;

}
