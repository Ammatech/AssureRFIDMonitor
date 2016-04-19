import {Component,OnInit} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {RouteParams, Router} from "angular2/router";

import {RfidReader}    from './rfid-reader';
import {RfidReaderService} from "./rfid-reader.service";

@Component({
  selector: 'rfid-reader-form',
  templateUrl: 'app/rfid-reader-form.component.html', 
  providers: [RfidReaderService]
})
export class RfidReaderFormComponent implements OnInit{

    rfidReaders = [];

    submitted = false;
    editMode:string = 'no';

    selectedRfidReader: RfidReader;

    entityId:number; // =23;


    constructor(private _router:Router,
                private _routeParams: RouteParams,
                private _httpService:RfidReaderService) {

    }

    ngOnInit() {
        this.entityId = +this._routeParams.get('entityId');
        this.onGetRfidReader();
    }

    goBack() {
        window.history.back();
    }


    onGetRfidReader() {

        console.log('entityId is ' + this.entityId.toString());
        this._httpService.getRfidReader(this.entityId)
            .subscribe(
                data => {this.rfidReaders = data;
                    console.log('getRFIDReader data');
                    //JSON.stringify(data)
                    },
                error => console.log(error), //alert(error.toString()),
                () => console.log('getRFIDReader Finished')
            )
    }

    onSubmit() {
        this.submitted = true;
        console.log(JSON.stringify(this.selectedRfidReader));

        this._httpService.updateRfidReader(this.selectedRfidReader)
            .subscribe(
                data => {
                    this.editMode = '';
                    this.onGetRfidReader()}, //JSON.stringify(data),
                error => console.log(error), //alert(error.toString()),
                () => console.log('updateRFIDReader Finished')
            )
    }

    onNewReader() {
            this.selectedRfidReader = new RfidReader(0,'', 0,'','','','','',this.entityId);
            this.editMode = 'insert';

    }

    onSelect(rfidReader: RfidReader) {
        this.selectedRfidReader = rfidReader;
        this.editMode = 'update';

    }

    onCancelReaderEdit(){
        //this.selectedRfidReader = new RfidReader(0,'','',0);
        this.editMode = 'no';
    }

}