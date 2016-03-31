/**
 * Created by Tony Sykes on 25-Jan-2016.
 */
import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Headers} from "angular2/http";
import {RequestOptions} from "angular2/http";
import {RfidMonitor} from "./rfid-monitor";

@Injectable()
export class RfidMonitorService {
    constructor (private _http: Http) {}

    // TODO fix this hard code up
    private urlRfidMonitorService:string = 'https://magellan.ammatech.com.au/rest/Assure_Dev_Service/RfidMonitorService';

    getRfidMonitor(entityId:number){

        let headers: Headers = new Headers();
        headers.append('Accept', 'text/json');

        let requestOptions: RequestOptions = new RequestOptions();
        requestOptions.headers = headers;

        let url:string = this.urlRfidMonitorService + '/' + entityId;
        console.log(url);

        return this._http.get(url, requestOptions)
            .map(res => res.json()); //console.log(res)); //res.json()

    }

    updateRfidMonitor(rfidMonitor:RfidMonitor){

        let headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');

        let requestOptions: RequestOptions = new RequestOptions();
        requestOptions.headers = headers;

        let body: string = JSON.stringify(rfidMonitor);

        //console.log(body);

        return this._http.post(this.urlRfidMonitorService, body, requestOptions)
            .map(res => res.json()); //console.log(res)); //

    }

 }


