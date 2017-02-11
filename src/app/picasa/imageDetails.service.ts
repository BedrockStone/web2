import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import { Http, Response } from '@angular/http';
import { parseStringSync } from 'xml2js-parser';
import { ImageDetails } from './imageDetails';
import { ImageDetail } from './imageDetail';

@Injectable()
export class ImageDetailsService {
    private imageDetails: any;
    private url: string = 'https://s3.amazonaws.com/picasa-exports/imageDetails.json';
    constructor(private http: Http) { }
    public getAllDetails(): Observable<any> {
        if (this.imageDetails) {
            return Observable.of(this.imageDetails);
        }
        return this.http.get(this.url).map((res: Response) => {
            this.imageDetails = res.json();
            return this.imageDetails;
        });
    }
    public getDetails(imageUrl): Observable<ImageDetail> {
        if (this.imageDetails) {
            return Observable.of(this.imageDetails)
            .map((details) => this.mapResults(details, imageUrl));
        }
        return this.http.get(this.url)
        .map((res: Response) => {
        return res.json();
        })
        .map((allImageDetails) => this.mapResults(allImageDetails, imageUrl));
    }
    public putDetails(imageUrl: string, imageDetail: ImageDetail) {
        if (!this.imageDetails) {
            this.imageDetails = {};
        }
        this.imageDetails[imageUrl] = imageDetail;
        this.http.put(this.url, JSON.stringify(this.imageDetails)).subscribe((x) => {
            // what to do here
            console.log('res:', JSON.stringify(x));
        }, (err) => {
            // what to do here
            console.log('ERROR: ', JSON.stringify(err));
        });
    }
    private mapResults(allImageDetails, imageUrl) {
        this.imageDetails = allImageDetails;
        let item = allImageDetails[imageUrl];
        if (!item) {
            return false;
        }
        item.relativeUrl = imageUrl;
        return item;
    }
}
