import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import { Hero }    from './hero';
import { RfidMonitor }    from './rfid-monitor';
import {RfidMonitorService} from "./rfid-monitor.service";
import {OnInit} from "angular2/core";

@Component({
  selector: 'hero-form',
  templateUrl: 'app/hero-form.component.html',
  providers: [RfidMonitorService]
})
export class HeroFormComponent implements OnInit{

    model = new Hero(18, 'Dr IQ', 'xxx', 'Chuck Overstreet');

  rfidMonitors = [];
    hospitals = [];

  submitted = false;

  getData:string;

    ngOnInit(){
        this.onGetHospital();
    }

  constructor(private _httpService:RfidMonitorService){

  }

  onGetRfidMonitor(entityId){

     console.log('entityId is ' + entityId.toString());

     this._httpService.getRfidMonitor(entityId)
         .subscribe(
            data => this.rfidMonitors = data, //JSON.stringify(data),
            error =>  console.log(error), //alert(error.toString()),
            () => console.log('getRFIDMonitor Finished')
     )
  }

    onGetHospital(){
        this._httpService.getHospital()
            .subscribe(
                data => this.hospitals = data, //JSON.stringify(data),
                error =>  console.log(error), //alert(error.toString()),
                () => console.log('getHospital Finished')
            )
    }

  onSubmit() {
      this.submitted = true;
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }


  //////// DO NOT SHOW IN DOCS ////////

  // Reveal in html:
  //   AlterEgo via form.controls = {{showFormControls(hf)}}
  showFormControls(form:NgForm){
    return form.controls['alterEgo'] &&
      form.controls['name'].value; // Dr. IQ
  }
  /////////////////////////////

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/