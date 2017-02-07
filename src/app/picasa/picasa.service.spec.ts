import { NO_ERRORS_SCHEMA } from '@angular/core';
import { albumImagesResults } from './getAlbumRestResults';
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

describe(`Service: PicasaService.getAlbums`, () => {
    let backend: MockBackend;
    let service: PicasaService;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                BaseRequestOptions,
                MockBackend,
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
    }));
    function setupConnections(xhrBackend: MockBackend, options: any) {
        backend.connections.subscribe((connection: MockConnection) => {
        const responseOptions = new ResponseOptions(options);
        const response = new Response(responseOptions);

        connection.mockRespond(response);
        });
    }
    let restResults = {
            body: `<ListBucketResult xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
                        <Name>picasa-exports</Name>
                        <Prefix/>
                        <Marker/>
                        <MaxKeys>1000</MaxKeys>
                        <Delimiter>/</Delimiter>
                        <IsTruncated>false</IsTruncated>
                        <CommonPrefixes>
                        <Prefix>Archways &amp; Columns/</Prefix>
                        </CommonPrefixes>
                    </ListBucketResult>`,
            status: 200};

    it('should return the correct number of albums', () => {
        setupConnections(backend, restResults );
        service.getAlbums().subscribe( (albums) => {
            expect(albums.length).toBe(1);
        });
    });

    it('should return an album that was properly serialized', () => {
        setupConnections(backend, restResults);
        service.getAlbums().subscribe( (albums) => {
            console.log(JSON.stringify(albums));
            expect(albums[0].name).toBe('Archways & Columns');
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
    }));
    function setupConnections(xhrBackend: MockBackend, options: any) {
        backend.connections.subscribe((connection: MockConnection) => {
            const responseOptions = new ResponseOptions(options);
            const response = new Response(responseOptions);
            connection.mockRespond(response);
        });
    }
    it('should return mapped images', () => {
        setupConnections(backend, albumImagesResults);
        service.getAlbum('Boulders').subscribe( (album) => {
            let images = album.images;
            ///this is just an image that exists in the getAlbumRestResults file
            expect(images.find((i) => i.url === service.baseUrl + 'Boulders/images/bl100.jpg'))
                .toBeTruthy();
        });
    });
    it('should filter out non jpgs', () => {
        setupConnections(backend, albumImagesResults);
        service.getAlbum('Boulders').subscribe((album) => {
            let images = album.images;
            expect(images.find((i) => !i.url.endsWith('.jpg'))).toBeFalsy();

        });
    });
    it('should not include thumbnails', () => {
        setupConnections(backend, albumImagesResults);
        service.getAlbum('Boulders').subscribe((album) => {
            let images = album.images;
            expect(images.find((i) => i.url.indexOf('/thumbnails') > 0)).toBeFalsy();
        });
    });
    it('should prefix all images with baseUrl', () => {
        setupConnections(backend, albumImagesResults);
        service.getAlbum('Boulders').subscribe((album) => {
            let images = album.images;
            expect(images.find((i) => i.url.indexOf(service.baseUrl) !== 0)).toBeFalsy();
        });
    });
});
