/**
 * Created by Tony Sykes on 25-Jan-2016.
 */
import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Headers} from "angular2/http";
import {RequestOptions} from "angular2/http";
import {UserProfile} from "./user-profile";

@Injectable()
export class UserProfileService {
    constructor (private _http: Http) {}

    // TODO fix this hard code up
    private urlUserProfileService:string = 'https://magellan.ammatech.com.au/rest/Assure_Dev_Service/UserProfileService';

    getUserProfile(entityId:number, userProfileId:number){

        let headers: Headers = new Headers();
        headers.append('Accept', 'text/json');

        let requestOptions: RequestOptions = new RequestOptions();
        requestOptions.headers = headers;

        let url:string = this.urlUserProfileService + '/searchParams?entityId=' + entityId + '&userProfileId=' + userProfileId;
        console.log(url);

        return this._http.get(url, requestOptions)
            .map(res => res.json()); //console.log(res)); //res.json()

    }

    updateUserProfile(userProfile:UserProfile){

        let headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');

        let requestOptions: RequestOptions = new RequestOptions();
        requestOptions.headers = headers;

        let body: string = JSON.stringify(userProfile);

        //console.log(body);

        return this._http.post(this.urlUserProfileService, body, requestOptions)
            .map(res => res.json()); //console.log(res)); //

    }
}


