import { Injectable } from '@angular/core';
import { Note }       from '../../_lib/Note';

@Injectable({
    providedIn: 'root'
})
export class LeftMenuSidebarService {

    public notes: Array<Note> = [

        {

            name: 'note 1'

        }, {

            name: 'note 2asd asdf'

        }

    ];
    
}
