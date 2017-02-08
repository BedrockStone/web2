import { Component,  OnInit} from '@angular/core';
import { PicasaService } from '../picasa/picasa.service';
import { LandingItem } from './landingItem';
@Component({
    selector: 'landing',
    templateUrl: 'landing.component.html',
    styleUrls: ['landing.component.css'],
    providers: [PicasaService]
})
export class LandingComponent implements OnInit{
    public landingItems: Array<LandingItem>;
    constructor(private picasa: PicasaService){

    }
    public ngOnInit(){
        this.landingItems = [
            {
                name:'Thin Veneer', 
                url: '#/album/Thin Veneer',
                imageUrl: 'https://s3.amazonaws.com/picasa-exports/Thin%20Veneer/images/tv100.jpg'
            },
            {
                name:'Eldorado',
                url:'#/album/eldorado',
                imageUrl:'http://eldorado.renoworks.com/sites/eldorado/img/background.jpg'
            },
        ];
    }
}
