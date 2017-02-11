import { NO_ERRORS_SCHEMA } from '@angular/core';
import { getAlbumResults } from './getAlbumResults';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
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

import { ImageDetailsService } from './imageDetails.service';
import { ImageDetail } from './imageDetail';

function setupService(backend: MockBackend) {
    backend.connections.subscribe((connection: MockConnection) => {
        let options = getAlbumResults[connection.request.url] || {status: 404};
        const responseOptions = new ResponseOptions(options);
        const response = new Response(responseOptions);
        connection.mockRespond(response);
    });
}
function setupTestBed() {
    TestBed.configureTestingModule({
            providers: [
                BaseRequestOptions,
                MockBackend,
                ImageDetailsService,
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
}

describe('Service: ImageDetails.getDetails', () => {
    // TODO: we don't even need this, do we?
    let backend: MockBackend;
    let service: ImageDetailsService;
    beforeEach(() => {
        setupTestBed();
        const testbed = getTestBed();
        backend = testbed.get(MockBackend);
        service = testbed.get(ImageDetailsService);
        setupService(backend);
    });
    it('should return imageDetails when requested', () => {
        service.getDetails('Type of Products/Thin Veneer/images/tv101.jpg')
            .subscribe((details) => {
                expect(details.title).toBe('Oklahoma Display');
                expect(details.key).toBe('TV101');
        });
    });
    it('should let you know when there are no details for an image', () => {
        service.getDetails('I do not exist').subscribe((details) => {
            expect(details).toBeFalsy();
        });
    });
});
describe('Service: ImageDetails.putDetails', () => {
    // TODO: we don't even need this, do we?
    let backend: MockBackend;
    let service: ImageDetailsService;
    beforeEach(() => {
        setupTestBed();
        const testbed = getTestBed();
        backend = testbed.get(MockBackend);
        service = testbed.get(ImageDetailsService);
        setupService(backend);
    });

    it('should remember changes you make', () => {
        let relativeUrl = 'relativeUrl';
        let title = 'title';
        let key = 'key';
        let imageDetails = {
            relativeUrl, title, key
        };
        service.putDetails(relativeUrl, imageDetails);
        service.getDetails(relativeUrl).subscribe((details) => {
            Object.keys(imageDetails).forEach((k) => {
                expect(imageDetails[k]).toEqual(details[k]);
            });
        });

        it('should make some put call somewhere to save the data', () => {
            backend.connections.subscribe((connection) => {
                console.log('we are here');
            });
            service.putDetails(relativeUrl, imageDetails);
        });
    });
});
