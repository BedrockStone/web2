import { Injectable } from '@angular/core';
import { Album }   from './album';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import { Http, Response } from '@angular/http';
import { parseStringSync } from 'xml2js-parser';

@Injectable()
export class PicasaService {
    public baseUrl: string = 'https://s3.amazonaws.com/picasa-exports/';
    private albums: Observable<Album[]>;
    constructor(private http: Http) {

    }
    public getAlbums(): Observable<Album[]> {
        return this.http.get(`${this.baseUrl}?delimiter=/`)
            .map(this.getXml)
            .map(this.mapPrefix);
    }
    public getAlbum(name): Observable<Album> {
        return this.http
        .get(`${this.baseUrl}?prefix=${name}/`)
            .map(this.getXml)
            .map( (t) => parseStringSync(t))
            .map( (x) => {
            return {
                name,
                images: x.ListBucketResult.Contents
                .filter((c) => c.Key[0].endsWith('.jpg') && c.Key[0].indexOf('/thumbnails/') === -1)
                .map((c) => {
                    return {url: this.baseUrl + c.Key[0]};
                })
            };
        });
    }

    private getXml(res: Response) {
        return res.text();
    }

    private mapPrefix(str: string) {
        let x = parseStringSync(str);
        return x.ListBucketResult.CommonPrefixes
                .map( (commonPrefix) => {
                    let n = commonPrefix.Prefix[0];
                    return {name: n.substring(0, n.length - 1), image: ''};
                });
    }
}
