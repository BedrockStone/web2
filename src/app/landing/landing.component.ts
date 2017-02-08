import { Component,  OnInit } from '@angular/core';
import { PicasaService } from '../picasa/picasa.service';
import { LandingItem } from './landingItem';
@Component({
    selector: 'landing',
    templateUrl: 'landing.component.html',
    styleUrls: ['landing.component.css'],
    providers: [PicasaService]
})
export class LandingComponent implements OnInit {
    public landingItems: LandingItem[];
    constructor(private picasa: PicasaService) {}
    public ngOnInit() {
        /* tslint:disable */
        this.landingItems = [
            {
                name: 'Natural Stone',
                url: '#/album/Select Veneer',
                imageUrl:
                `https://s3.amazonaws.com/picasa-exports/Select%20Veneer/images/ariz_buckskin_036.jpg`
            },
            {
                name: 'Eldorado',
                url: '#/album/eldorado',
                imageUrl:
                'http://eldorado.renoworks.com/sites/eldorado/img/background.jpg'
            },
        ];
        /* tsLint:enable */
    }
}
