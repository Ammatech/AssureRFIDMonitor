System.register(['angular2/core', './rfid-monitor', "./rfid-monitor.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, rfid_monitor_1, rfid_monitor_service_1;
    var RfidMonitorFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (rfid_monitor_1_1) {
                rfid_monitor_1 = rfid_monitor_1_1;
            },
            function (rfid_monitor_service_1_1) {
                rfid_monitor_service_1 = rfid_monitor_service_1_1;
            }],
        execute: function() {
            RfidMonitorFormComponent = (function () {
                function RfidMonitorFormComponent(_httpService) {
                    this._httpService = _httpService;
                    this.rfidMonitors = [];
                    this.hospitals = [];
                    this.submitted = false;
                    //hospitalSelect = false;
                    this.editMode = '';
                }
                RfidMonitorFormComponent.prototype.ngOnInit = function () {
                    this.onGetHospital();
                };
                RfidMonitorFormComponent.prototype.onGetRfidMonitor = function (entityId) {
                    var _this = this;
                    console.log('entityId is ' + entityId.toString());
                    this.hospitalSelect = true;
                    this._httpService.getRfidMonitor(entityId)
                        .subscribe(function (data) { return _this.rfidMonitors = data; }, //JSON.stringify(data),
                    function (//JSON.stringify(data),
                        error) { return console.log(error); }, //alert(error.toString()),
                    function () { return console.log('getRFIDMonitor Finished'); });
                };
                RfidMonitorFormComponent.prototype.onGetHospital = function () {
                    var _this = this;
                    this._httpService.getHospital()
                        .subscribe(function (data) { return _this.hospitals = data; }, //JSON.stringify(data),
                    function (//JSON.stringify(data),
                        error) { return console.log(error); }, //alert(error.toString()),
                    function () { return console.log('getHospital Finished'); });
                };
                RfidMonitorFormComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.submitted = true;
                    console.log(JSON.stringify(this.selectedRfidMonitor));
                    this._httpService.updateRfidMonitor(this.selectedRfidMonitor)
                        .subscribe(function (data) {
                        _this.editMode = '';
                        _this.onGetRfidMonitor(_this.selectedRfidMonitor.entity_id);
                    }, //JSON.stringify(data),
                    function (//JSON.stringify(data),
                        error) { return console.log(error); }, //alert(error.toString()),
                    function () { return console.log('updateRFIDMonitor Finished'); });
                };
                RfidMonitorFormComponent.prototype.onNewMonitor = function (entityId) {
                    this.selectedRfidMonitor = new rfid_monitor_1.RfidMonitor(0, '', '', entityId);
                    this.editMode = 'insert';
                };
                RfidMonitorFormComponent.prototype.onSelect = function (rfidMonitor) {
                    this.selectedRfidMonitor = rfidMonitor;
                    this.editMode = 'update';
                };
                RfidMonitorFormComponent.prototype.onCancel = function () {
                    this.editMode = '';
                };
                RfidMonitorFormComponent = __decorate([
                    core_1.Component({
                        selector: 'rfid-monitor-form',
                        templateUrl: 'app/rfid-monitor-form.component.html',
                        providers: [rfid_monitor_service_1.RfidMonitorService]
                    }), 
                    __metadata('design:paramtypes', [rfid_monitor_service_1.RfidMonitorService])
                ], RfidMonitorFormComponent);
                return RfidMonitorFormComponent;
            })();
            exports_1("RfidMonitorFormComponent", RfidMonitorFormComponent);
        }
    }
});
//# sourceMappingURL=rfid-monitor-form.component.js.map