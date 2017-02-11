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
import { ImageDetailsService } from './imageDetails.service';
@Component({
    selector: 'picasa',
    templateUrl: 'picasa.component.html',
    styleUrls: [ './picasa.component.css' ],
    providers: [ImageDetailsService, PicasaService]
})
export class PicasaComponent implements OnInit {
    @ViewChild('modal')
    public modal: ModalComponent;
    public albums: Album[];
    public selectedAlbum: Album;
    public selectedAlbumId: string;
    public selectedAlbumImage: AlbumImage;
    public columns: number = 4;
    public parent: string;
    public albumName: string;
    public imgWidthPct: number;
    private fakeImageUrl: string =
    'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    constructor(
        private http: Http,
        private imageDetailsService: ImageDetailsService,
        private picasa: PicasaService,
        private route: ActivatedRoute,
        private router: Router,
        private location: Location ) {
        }
    public ngOnInit() {
        this.imgWidthPct = Math.round(100 / this.columns) - 1;
        this.modal.onDismiss.subscribe(() => {
            console.log(JSON.stringify(this.selectedAlbumImage));
            if (!this.selectedAlbumImage.dirty) {
                return;
            }
            this.selectedAlbumImage.dirty = false;
            this.selectedAlbumImage.relativeUrl =
            this.selectedAlbumImage.url
                .replace(this.picasa.baseUrl + this.picasa.defaultPrefix, '');
            this.imageDetailsService
            .putDetails(this.selectedAlbumImage.relativeUrl, this.selectedAlbumImage);
        });
        this.route.params.subscribe((params) => {
            let albumId = this.route.snapshot.params['albumId'];
            this.albumName = albumId;
            let childAlbum = this.route.snapshot.params['childAlbum'];
            this.picasa.getAlbums().subscribe((x) => this.albums = x);
            let album = albumId;
            if (childAlbum) {
                album += '/' + childAlbum;
                this.parent = albumId;
                this.albumName = childAlbum;
            }
            this.changeAlbum(album);
        });
    }

    public changeAlbum(name) {
        this.selectedAlbumId = name;
        this.picasa.getAlbum(this.selectedAlbumId)
            .subscribe((album) => {
                // push in fake images so we get nice alignment
                while (album.images.length % this.columns) {
                    album.images.push({url: this.fakeImageUrl, relativeUrl: '' });
                }
                this.selectedAlbum = album;
            });
    }

    public selectImage(image) {
        this.selectedAlbumImage = image;
        console.log(image.url);
        // check lookup first
        let key = image.url.replace(this.picasa.baseUrl + '1024/', '/');
        console.log('looking up ', key);
        if (AlbumLookup[key]) {
            this.router.navigate(['/album/' + AlbumLookup[key]]);
            return;
        }
        this.modal.open();
    }
    public closeModal() {
        this.selectedAlbumImage = undefined;
    }
}
