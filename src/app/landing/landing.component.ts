import { Component,  OnInit } from '@angular/core';
import { PicasaService } from '../picasa/picasa.service';
import { LandingItems } from './landingItems';
@Component({
    selector: 'landing',
    templateUrl: 'landing.component.html',
    styleUrls: ['landing.component.css'],
    providers: [PicasaService]
})
export class LandingComponent implements OnInit {
    public landingItems;
    constructor(private picasa: PicasaService) {}
    public ngOnInit() {
        this.landingItems = LandingItems;
    }
}
