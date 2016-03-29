System.register(['angular2/core', "angular2/router", './rfid-monitor', "./rfid-monitor.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, rfid_monitor_1, rfid_monitor_service_1;
    var RfidMonitorFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (rfid_monitor_1_1) {
                rfid_monitor_1 = rfid_monitor_1_1;
            },
            function (rfid_monitor_service_1_1) {
                rfid_monitor_service_1 = rfid_monitor_service_1_1;
            }],
        execute: function() {
            RfidMonitorFormComponent = (function () {
                function RfidMonitorFormComponent(_router, _routeParams, _httpService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._httpService = _httpService;
                    this.rfidMonitors = [];
                    this.submitted = false;
                    this.editMode = 'no';
                }
                RfidMonitorFormComponent.prototype.ngOnInit = function () {
                    this.entityId = +this._routeParams.get('entityId');
                    this.onGetRfidMonitor();
                };
                RfidMonitorFormComponent.prototype.goBack = function () {
                    window.history.back();
                };
                RfidMonitorFormComponent.prototype.onGetRfidMonitor = function () {
                    var _this = this;
                    console.log('entityId is ' + this.entityId.toString());
                    this._httpService.getRfidMonitor(this.entityId)
                        .subscribe(function (data) {
                        _this.rfidMonitors = data;
                        console.log('getRFIDMonitor data');
                        //JSON.stringify(data)
                    }, function (error) { return console.log(error); }, //alert(error.toString()),
                    function () { return console.log('getRFIDMonitor Finished'); });
                };
                RfidMonitorFormComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.submitted = true;
                    console.log(JSON.stringify(this.selectedRfidMonitor));
                    this._httpService.updateRfidMonitor(this.selectedRfidMonitor)
                        .subscribe(function (data) {
                        _this.editMode = '';
                        _this.onGetRfidMonitor();
                    }, //JSON.stringify(data),
                    function (//JSON.stringify(data),
                        error) { return console.log(error); }, //alert(error.toString()),
                    function () { return console.log('updateRFIDMonitor Finished'); });
                };
                RfidMonitorFormComponent.prototype.onNewMonitor = function () {
                    this.selectedRfidMonitor = new rfid_monitor_1.RfidMonitor(0, '', '', this.entityId);
                    this.editMode = 'insert';
                };
                RfidMonitorFormComponent.prototype.onSelect = function (rfidMonitor) {
                    this.selectedRfidMonitor = rfidMonitor;
                    this.editMode = 'update';
                };
                RfidMonitorFormComponent.prototype.onCancelMonitorEdit = function () {
                    //this.selectedRfidMonitor = new RfidMonitor(0,'','',0);
                    this.editMode = 'no';
                };
                RfidMonitorFormComponent = __decorate([
                    core_1.Component({
                        selector: 'rfid-monitor-form',
                        templateUrl: 'app/rfid-monitor-form.component.html',
                        providers: [rfid_monitor_service_1.RfidMonitorService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, rfid_monitor_service_1.RfidMonitorService])
                ], RfidMonitorFormComponent);
                return RfidMonitorFormComponent;
            }());
            exports_1("RfidMonitorFormComponent", RfidMonitorFormComponent);
        }
    }
});
//# sourceMappingURL=rfid-monitor-form.component.js.map