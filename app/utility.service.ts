///<reference path="../node_modules/angular2/src/http/http.d.ts"/>
/**
 * Created by Tony Sykes on 30-Mar-2016.
 */
import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Headers} from "angular2/http";
import {RequestOptions} from "angular2/http";

@Injectable()
export class UtilityService {
    constructor (private _http: Http) {}

    // TODO fix this hard code up
    private urlUtilityService:string = 'https://magellan.ammatech.com.au/rest/Assure_Dev_Utility/';

    getUserType(){

        let headers: Headers = new Headers();
        headers.append('Accept', 'text/json');

        let requestOptions: RequestOptions = new RequestOptions();
        requestOptions.headers = headers;

        return this._http.get(this.urlUtilityService + 'getUserType', requestOptions)
            .map(res => res.json());

    }

    getUserStatus(){

        let headers: Headers = new Headers();
        headers.append('Accept', 'text/json');

        let requestOptions: RequestOptions = new RequestOptions();
        requestOptions.headers = headers;

        return this._http.get(this.urlUtilityService + 'getUserStatus', requestOptions)
            .map(res => res.json());

    }

}


