import { Component, OnInit, Injectable, ViewChild }        from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Response }                       from '@angular/http';
import { Observable }                           from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { PicasaService } from './picasa.service';
import { Album }   from './album';
import { AlbumImage } from './albumImage';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
    selector: 'picasa',
    templateUrl: 'picasa.component.html',
    styleUrls: [ './picasa.component.css' ],
    providers: [PicasaService]
})
export class PicasaComponent implements OnInit {
    @ViewChild('modal')
    public modal: ModalComponent;
    public albums: Album[];
    public selectedAlbum: Album;
    public selectedAlbumId: string;
    public selectedAlbumImage: AlbumImage;
    private columns: number = 4;
    private fakeImageUrl: string =
    'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    constructor(private http: Http, private picasa: PicasaService, private route: ActivatedRoute, private location: Location ) { }
    public ngOnInit() {
       let albumId = this.route.snapshot.params['albumId'] || 'Type of Products';
       this.picasa.getAlbums().subscribe( (x) => this.albums = x);
       this.changeAlbum(albumId);
    }

    public changeAlbum(name) {
        this.selectedAlbumId = name;
        if(name === 'eldorado'){
            return;
        }
        
        this.picasa.getAlbum(this.selectedAlbumId)
            .subscribe((album) => {
                // push in fake images so we get nice alignment
                while (album.images.length % this.columns) {
                    album.images.push({url: this.fakeImageUrl });
                }
                this.selectedAlbum = album;
            });
    }

    public selectImage(image) {
        this.selectedAlbumImage = image;
        this.modal.open();
    }
    public closeModal() {
        this.selectedAlbumImage = undefined;
    }
}
