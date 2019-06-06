import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemesService {

    public pageBackgroundColor: string = '#eee';

    public sidebarBackgroundColor: string = '#7F2CCB';
    public leftMenuSidebarBackgroundColor: string = '#171717';
    public sliderBackgroundColor: string = '#272727';

}
