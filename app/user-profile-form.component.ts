import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import { UserProfile }    from './user-profile';
import {UserProfileService} from "./user-profile.service";
import {OnInit} from "angular2/core";
import {Router, RouteParams} from "angular2/router";

@Component({
  selector: 'user-profile-form',
  templateUrl: 'app/user-profile-form.component.html',
  providers: [UserProfileService]
})
export class UserProfileFormComponent implements OnInit{

    UserProfiles = [];
    //hospitals = [];

    submitted = false;
    //hospitalSelect = false;
    editMode:string = 'no';

    selectedUserProfile: UserProfile;

    entityId:number;

    constructor(private _router:Router,
                private _routeParams: RouteParams,
                private _httpService:UserProfileService) {

    }

    ngOnInit() {
        this.entityId = +this._routeParams.get('entityId');
        this.onGetUserProfile();
    }

    goBack() {
        window.history.back();
    }


    onGetUserProfile() {

        this._httpService.getUserProfile(this.entityId)
            .subscribe(
                data => this.UserProfiles = data, //JSON.stringify(data),
                error => console.log(error), //alert(error.toString()),
                () => console.log('getUserProfile Finished')
            )
    }

    onSubmit() {
        this.submitted = true;
        console.log(JSON.stringify(this.selectedUserProfile));

        this._httpService.updateUserProfile(this.selectedUserProfile)
            .subscribe(
                data => {
                    this.editMode = '';
                    this.onGetUserProfile()}, //JSON.stringify(data),
                error => console.log(error), //alert(error.toString()),
                () => console.log('updateUserProfile Finished')
            )
    }

    onNewUserProfile() {
            this.selectedUserProfile = new UserProfile(0,0,0,'','','','','',0,'','',false,0,this.entityId, 0);
            this.editMode = 'insert';

    }

    onSelect(UserProfile: UserProfile) {
        this.selectedUserProfile = UserProfile;
        this.editMode = 'update';

    }

    onCancelUserProfileEdit(){
        //this.selectedUserProfile = new UserProfile(0,'','',0);
        this.editMode = 'no';
    }

}