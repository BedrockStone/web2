import { Injectable } from '@angular/core';
import { Album }   from './album';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/defer';
import 'rxjs/add/operator/share';
import { Http, Response } from '@angular/http';
import { parseStringSync } from 'xml2js-parser';
import { ImageDetailsService } from './imageDetails.service';
import { ImageDetails } from './imageDetails';

@Injectable()
export class PicasaService {
    public baseUrl: string = 'https://s3.amazonaws.com/picasa-exports/';
    public defaultPrefix = '1024/';
    private albums: Observable<Album[]>;
    private cache: any = {};
    constructor(private http: Http, private imageDetailsService: ImageDetailsService) { }
    public getAlbums(name?: string): Observable<Album[]> {
        let url =  `${this.baseUrl}?delimiter=/`;
        if (name) {
            url  += `&prefix=${this.defaultPrefix}${name}/`;
        }
        let bucketRequest = this.http.get(url)
            .map(this.getXml)
            .map((xml: string) => {
                let x = parseStringSync(xml);
                let results = x.ListBucketResult.CommonPrefixes
                .map((commonPrefix) => {
                    let n = commonPrefix.Prefix[0];
                    n = n.substring(0, n.length - 1);
                    n = n.replace(`${name}/`, '');
                    return{
                        name: n,
                        image: ''
                    };
                });
                // console.log('mapped results: ', JSON.stringify(results));
                return results;
            });
        return bucketRequest;
    }
    public getAlbum(name): Observable<Album> {
        let url;
        if (name) {
            /* tslint:disable */
            url = `${this.baseUrl}?delimiter=/&prefix=${this.defaultPrefix}${encodeURIComponent(name)}/images/`;
            /* tslint:enable */
        } else {
            url = `${this.baseUrl}?delimiter=/&prefix=${this.defaultPrefix}images/`;
        }
        // console.log('sending request to ', url);
        return this.imageDetailsService.getAllDetails().flatMap((imageDetails) => {
            return this.http
            .get(url)
                .map(this.getXml)
                .map( (t) => parseStringSync(t))
                .map( (x) => {
                return {
                    name,
                    images: x.ListBucketResult.Contents
                    .filter((c) => c.Key[0].endsWith('.jpg') &&
                        c.Key[0].indexOf('/thumbnails/') === -1)
                    .map((c) => {
                        // TODO, make this more abstract, merge imageDetails to results
                        let title = '';
                        let key = c.Key[0].replace(this.defaultPrefix, '');
                        let results = imageDetails[key] || {};
                        results.url = this.baseUrl + c.Key[0];
                        return results;
                    })
                };
            });
        });
    }
    private getXml(res: Response) {
        return res.text();
    }
}
