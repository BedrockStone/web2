import { NO_ERRORS_SCHEMA } from '@angular/core';
import { getAlbumResults } from './getAlbumResults';
import {
  inject,
  async,
  TestBed,
  getTestBed,
  ComponentFixture
} from '@angular/core/testing';
import {
    MockBackend,
    MockConnection
} from '@angular/http/testing';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http,
  XHRBackend,
  ResponseOptions,
  Response
} from '@angular/http';

// Load the implementations that should be tested
import { AppState } from '../app.service';
import { PicasaService } from './picasa.service';
import { ImageDetailsService } from './imageDetails.service';

function setupService(backend: MockBackend) {
    backend.connections.subscribe((connection: MockConnection) => {
        let options = getAlbumResults[connection.request.url] || {status: 404};
        const responseOptions = new ResponseOptions(options);
        const response = new Response(responseOptions);
        connection.mockRespond(response);
    });
}
describe(`Service: PicasaService.getAlbums`, () => {
    let backend: MockBackend;
    let service: PicasaService;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                BaseRequestOptions,
                MockBackend,
                ImageDetailsService,
                PicasaService,
                {
                    deps: [
                        MockBackend,
                        BaseRequestOptions
                    ],
                    provide: Http,
                    useFactory: (xhrBackend: XHRBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(xhrBackend, defaultOptions);
                    }
                }
            ]
        });

        const testbed = getTestBed();
        backend = testbed.get(MockBackend);
        service = testbed.get(PicasaService);
        setupService(backend);
    }));
    it('should return the correct number of albums', () => {
        service.getAlbums().subscribe( (albums) => {
            expect(albums.length).toBe(2);
        });
    });

    it('should return albums that are properly serialized', () => {
        service.getAlbums().subscribe( (albums) => {
            // console.log(JSON.stringify(albums));
            expect(albums.find( (a) => a.name === 'Type of Project')).toBeTruthy();
            expect(albums.find( (a) => a.name === 'Type of Products')).toBeTruthy();
        });
    });
    // We don't ever use this. Probably should just delete the whole function, but
    // for now I wanna leave it, because it has some good logic there.
    xit('can get child albums', () => {
         service.getAlbums('Type of Project').subscribe( (albums) => {
            // console.log(JSON.stringify(albums));
            expect(albums.find( (a) => a.name === 'Pools')).toBeTruthy();
        });
    });
});

describe(`Service: PicasaService.getAlbum`, () => {
    let backend: MockBackend;
    let service: PicasaService;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                BaseRequestOptions,
                MockBackend,
                ImageDetailsService,
                PicasaService,
                {
                    deps: [
                        MockBackend,
                        BaseRequestOptions
                    ],
                    provide: Http,
                    useFactory: (xhrBackend: XHRBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(xhrBackend, defaultOptions);
                    }
                }
            ]
        });

        const testbed = getTestBed();
        backend = testbed.get(MockBackend);
        service = testbed.get(PicasaService);
        setupService(backend);
    }));
    it('should return mapped images', () => {
        service.getAlbum('Type of Products').subscribe( (album) => {
            let images = album.images;
            ///this is just an image that exists in the getAlbumRestResults file
            expect(images.find((i) => i.url === service.baseUrl
            + 'Type of Products/images/product1.jpg')).toBeTruthy();
        });
    });
    it('should populate album name', () => {
        service.getAlbum('Type of Products').subscribe( (album) => {
            expect(album.name).toBe('Type of Products');
        });
    });
    it('should filter out non jpgs', () => {
        service.getAlbum('Type of Products').subscribe((album) => {
            let images = album.images;
            expect(images.find((i) => !i.url.endsWith('.jpg'))).toBeFalsy();

        });
    });
    it('should not include thumbnails', () => {
        service.getAlbum('Type of Products').subscribe((album) => {
            let images = album.images;
            expect(images.find((i) => i.url.indexOf('/thumbnails') > 0)).toBeFalsy();
        });
    });
    it('should prefix all images with baseUrl', () => {
        service.getAlbum('Type of Products').subscribe((album) => {
            let images = album.images;
            expect(images.find((i) => i.url.indexOf(service.baseUrl) !== 0)).toBeFalsy();
        });
    });
});
