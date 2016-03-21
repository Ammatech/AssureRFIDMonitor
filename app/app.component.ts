import {Component, OnInit}         from 'angular2/core';
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {RfidMonitorFormComponent} from './rfid-monitor-form.component';
import {UserProfileFormComponent} from "./user-profile-form.component";

import {AdministrationService} from "./administration.service";
import {RfidMonitorService} from "./rfid-monitor.service";
import {UserProfileService} from "./user-profile.service";

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
      AdministrationService,
    RfidMonitorService,
      UserProfileService
  ]
})
@RouteConfig([
  {
    path: '/rfidmonitor',
    name: 'RfidMonitor',
    component: RfidMonitorFormComponent

  },
    {
        path: '/userprofile',
        name: 'UserProfile',
        component: UserProfileFormComponent

    },
])

export class AppComponent implements OnInit {

    entitys:any = [];
    entitySelect = false;
    entityId:number;
    title:string = 'Next Gen Assure';

    constructor(private _router: Router,
    private _httpService: AdministrationService) {

    }

    ngOnInit() {
        console.log('AppComponent - ngOnInit called');
        this.onGetEntity();
    }


    onGetEntity() {
        this._httpService.getEntity()
            .subscribe(
                data => this.entitys = data, //JSON.stringify(data),
                error => console.log(error), //alert(error.toString()),
                () => console.log('getEntity Finished')
            )
    }

    onSelectEntity(entityId: number) {
        console.log('onSelectEntity Called')
        this.entitySelect = true;
        this.entityId = entityId;
    }
}
