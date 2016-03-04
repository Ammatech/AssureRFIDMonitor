import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import { RfidMonitor }    from './rfid-monitor';
import {RfidMonitorService} from "./rfid-monitor.service";
import {OnInit} from "angular2/core";

@Component({
  selector: 'rfid-monitor-form',
  templateUrl: 'app/rfid-monitor-form.component.html',
  providers: [RfidMonitorService]
})
export class RfidMonitorFormComponent implements OnInit {

    model = new RfidMonitor(0,'','',0);

    rfidMonitors = [];
    hospitals = [];

    submitted = false;

    hospitalSelect = false;

    ngOnInit() {
        this.onGetHospital();
    }

    constructor(private _httpService:RfidMonitorService) {

    }

    onGetRfidMonitor(entityId) {

        console.log('entityId is ' + entityId.toString());
        this.hospitalSelect = true;
        this._httpService.getRfidMonitor(entityId)
            .subscribe(
                data => this.rfidMonitors = data, //JSON.stringify(data),
                error => console.log(error), //alert(error.toString()),
                () => console.log('getRFIDMonitor Finished')
            )
    }

    onGetHospital() {
        this._httpService.getHospital()
            .subscribe(
                data => this.hospitals = data, //JSON.stringify(data),
                error => console.log(error), //alert(error.toString()),
                () => console.log('getHospital Finished')
            )
    }

    onSubmit() {
        this.submitted = true;
        console.log(JSON.stringify(this.model));

        this._httpService.updateRfidMonitor(this.model)
            .subscribe(
                data => this.onGetRfidMonitor(this.model.entityId), //JSON.stringify(data),
                error => console.log(error), //alert(error.toString()),
                () => console.log('updateRFIDMonitor Finished')
            )


    }
}