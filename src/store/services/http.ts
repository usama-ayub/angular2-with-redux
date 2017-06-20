import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map';

declare var firebase: any;

export type customServerResponseObject = { 'success': boolean, 'data': any, 'error': any };

@Injectable()
export class HttpService {
    constructor(public http: Http) {

    }

    /*   GetHeaders() {
           let headers: Headers = new Headers();
           headers.append('Content-Type', 'application/json');
           let options: RequestOptions = new RequestOptions();
           options.headers = headers;
           return options;
       }*/

    ResponseMap(res: Response) {
        let response: customServerResponseObject = res.json();
        if (response && response.hasOwnProperty('success')) {
            return response;
        } else if (response.hasOwnProperty('kind')) {
            return {
                success: true,
                data: response,
                error: null
            };
        }
        else {
            return {
                success: false,
                data: null,
                error: response
            };
        }
    }

    GetRequest(url: string): Observable<customServerResponseObject> {
        return this.http.get(url).map(this.ResponseMap);
    }

    PostRequest(url: string, obj: Object): Observable<customServerResponseObject> {
        return this.http.post(url, obj).map(this.ResponseMap);
    }

    PutRequest(url: string, obj: Object): Observable<customServerResponseObject> {
        return this.http.put(url, obj).map(this.ResponseMap);
    }

    DeleteRequest(url: string): Observable<customServerResponseObject> {
        return this.http.delete(url).map((this.ResponseMap));
    }

 
}
