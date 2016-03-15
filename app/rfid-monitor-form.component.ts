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

    rfidMonitors = [];
    hospitals = [];

    submitted = false;
    hospitalSelect = false;
    editMode:string = '';

    selectedRfidMonitor: RfidMonitor;


    ngOnInit() {
        this.onGetHospital();
    }

    constructor(private _httpService:RfidMonitorService) {

    }

    onGetRfidMonitor(entityId: number) {

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
        console.log(JSON.stringify(this.selectedRfidMonitor));

        this._httpService.updateRfidMonitor(this.selectedRfidMonitor)
            .subscribe(
                data => {
                    this.editMode = '';
                    this.onGetRfidMonitor(this.selectedRfidMonitor.entity_id)}, //JSON.stringify(data),
                error => console.log(error), //alert(error.toString()),
                () => console.log('updateRFIDMonitor Finished')
            )
        this._httpService(s)
    }

    onNewMonitor(entityId: number) {
            this.selectedRfidMonitor = new RfidMonitor(0,'','',entityId);
            this.editMode = 'insert';

    }

    onSelect(rfidMonitor: RfidMonitor) {
        this.selectedRfidMonitor = rfidMonitor;
        this.editMode = 'update';

    }

    onCancelMonitorEdit(){
        //this.selectedRfidMonitor = new RfidMonitor(0,'','',0);
        this.editMode = '';
    }

}