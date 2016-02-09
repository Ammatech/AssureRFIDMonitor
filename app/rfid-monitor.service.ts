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

    updateRfidMonitor(rfidMonitor:RfidMonitor){

        let headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        //headers.append('Content-Type', 'application/x-www-form-urlencoded');

        //headers.append('Access-Control-Allow-Headers', 'POST,OPTIONS,HEAD,GET,PUT');

        let requestOptions: RequestOptions = new RequestOptions();
        requestOptions.headers = headers;

        let body: string = JSON.stringify(rfidMonitor); // Does not work

        //let body: string = ''; //works 09Feb
        //let body: string = '//' + JSON.stringify(rfidMonitor); //No good
        //let body: string = '[' + JSON.stringify(rfidMonitor) + ']'; //No good
        //let body: string = '"rfidMonitorId"="0","rfidMonitorCode"="xx","description"="xx","entityId"="24"'; //Works but thinks it is just one field "RFIDMONITORID
        //let body: string = '"rfidMonitorId":"0","rfidMonitorCode":"xx","description":"xx","entityId":"24"'; // NO GOOD java.lang.IllegalArgumentException at coldfusion.filter.FormScope.parseQueryString(FormScope.java:551)
        //let body: string = "'rfidMonitorId':'0','rfidMonitorCode':'xx'"; // NO GOOD - 	java.lang.IllegalArgumentException
        //let body: string = '"rfidMonitorId"="0"'; //Works
        //let body: string = '"rfidMonitorId":"0"'; // ????????
        //body = body.replace(/:/g, "=");
        //body = body.replace("{", "");
        //body = body.replace("}", "");

        //let body: string = '"Form" = ' + JSON.stringify(rfidMonitor);
        //let body: string = '{"rfidMonitorId":"0","rfidMonitorCode":"xx","description":"xx","entityId":"24"}'; // NO GOOD - 	java.lang.IllegalArgumentException
        console.log(body);

        let url = 'https://magellan.ammatech.com.au/rest/Assure_Dev/RfidMonitorService';
        console.log(url);

        return this._http.post(url, body, requestOptions)
            //.map(res => res.json()); //console.log(res)); //
            .map(res => console.log(res)); //

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


