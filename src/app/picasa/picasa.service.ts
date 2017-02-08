import { Injectable } from '@angular/core';
import { Album }   from './album';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/forkJoin';
import { Http, Response } from '@angular/http';
import { parseStringSync } from 'xml2js-parser';

@Injectable()
export class PicasaService {
    public baseUrl: string = 'https://s3.amazonaws.com/picasa-exports/';
    private albums: Observable<Album[]>;
    constructor(private http: Http) {

    }
    public getAlbums(name?: string): Observable<Album[]> {
        console.log(name);
        let url =  `${this.baseUrl}?delimiter=/`;
        if (name) {
            url  += `&prefix=${name}/`;
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
        let url = `${this.baseUrl}?delimiter=/&prefix=${name}/images/`;
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
                    return {url: this.baseUrl + c.Key[0]};
                })
            };
        });
    }
    private getXml(res: Response) {
        return res.text();
    }
}
