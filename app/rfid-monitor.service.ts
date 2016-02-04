/**
 * Created by Tony Sykes on 25-Jan-2016.
 */
import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Headers} from "angular2/http";
import {RequestOptions} from "angular2/http";

@Injectable()
export class RfidMonitorService {
    constructor (private _http: Http) {}

    getRfidMonitor(entityId:number){

        let headers: Headers = new Headers();
        headers.append('Accept', 'text/json');

        let requestOptions: RequestOptions = new RequestOptions();
        requestOptions.headers = headers;

        let url = 'https://magellan.ammatech.com.au/rest/Assure_Dev/RfidMonitorService/' + entityId;
        console.log(url);

        return this._http.get(url, requestOptions)
            .map(res => res.json()); //console.log(res)); //

    }

    getHospital(){

        let headers: Headers = new Headers();
        headers.append('Accept', 'text/json');

        let requestOptions: RequestOptions = new RequestOptions();
        requestOptions.headers = headers;

        return this._http.get('https://magellan.ammatech.com.au/rest/Assure_Dev/EntityService', requestOptions)
            .map(res => res.json()); //console.log(res)); //

    }

}


