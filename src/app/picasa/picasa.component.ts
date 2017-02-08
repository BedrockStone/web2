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
import { AlbumLookup } from './albumLookup';
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
    public columns: number = 8;
    public imgWidthPct: number;
    private fakeImageUrl: string =
    'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    constructor(
        private http: Http,
        private picasa: PicasaService,
        private route: ActivatedRoute,
        private router: Router,
        private location: Location ) {
        }
    public ngOnInit() {
        this.imgWidthPct = Math.round(100 / this.columns) - 1;
        this.route.params.subscribe((params) => {
            let albumId = this.route.snapshot.params['albumId'] || 'Type of Products';
            let childAlbum = this.route.snapshot.params['childAlbum'];
            this.picasa.getAlbums().subscribe((x) => this.albums = x);
            let album = albumId;
            if (childAlbum) {
                album += '/' + childAlbum;
            }
            this.changeAlbum(album);
        });
        
    }

    public changeAlbum(name) {
        this.selectedAlbumId = name;
        if (name === 'eldorado') {
            this.route
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
        // check lookup first
        let key = image.url.replace(this.picasa.baseUrl, '/');
        if (AlbumLookup[key]) {
            this.router.navigate(['/album/'+ AlbumLookup[key]]);
            return;
        }
        this.modal.open();
    }
    public closeModal() {
        this.selectedAlbumImage = undefined;
    }
}
