import { Component }     from '@angular/core';
import { ThemesService } from '../../_lib/themes.service';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: [ './slider.component.scss' ]
})
export class SliderComponent {

    public constructor(public themesService: ThemesService) {
        
    }

}
