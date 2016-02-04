System.register(['angular2/core', './hero', "./rfid-monitor.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hero_1, rfid_monitor_service_1;
    var HeroFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_1_1) {
                hero_1 = hero_1_1;
            },
            function (rfid_monitor_service_1_1) {
                rfid_monitor_service_1 = rfid_monitor_service_1_1;
            }],
        execute: function() {
            HeroFormComponent = (function () {
                function HeroFormComponent(_httpService) {
                    this._httpService = _httpService;
                    this.model = new hero_1.Hero(18, 'Dr IQ', 'xxx', 'Chuck Overstreet');
                    this.rfidMonitors = [];
                    this.hospitals = [];
                    this.submitted = false;
                }
                HeroFormComponent.prototype.ngOnInit = function () {
                    this.onGetHospital();
                };
                HeroFormComponent.prototype.onGetRfidMonitor = function (entityId) {
                    var _this = this;
                    console.log('entityId is ' + entityId.toString());
                    this._httpService.getRfidMonitor(entityId)
                        .subscribe(function (data) { return _this.rfidMonitors = data; }, //JSON.stringify(data),
                    function (//JSON.stringify(data),
                        error) { return console.log(error); }, //alert(error.toString()),
                    function () { return console.log('getRFIDMonitor Finished'); });
                };
                HeroFormComponent.prototype.onGetHospital = function () {
                    var _this = this;
                    this._httpService.getHospital()
                        .subscribe(function (data) { return _this.hospitals = data; }, //JSON.stringify(data),
                    function (//JSON.stringify(data),
                        error) { return console.log(error); }, //alert(error.toString()),
                    function () { return console.log('getHospital Finished'); });
                };
                HeroFormComponent.prototype.onSubmit = function () {
                    this.submitted = true;
                };
                Object.defineProperty(HeroFormComponent.prototype, "diagnostic", {
                    // TODO: Remove this when we're done
                    get: function () { return JSON.stringify(this.model); },
                    enumerable: true,
                    configurable: true
                });
                //////// DO NOT SHOW IN DOCS ////////
                // Reveal in html:
                //   AlterEgo via form.controls = {{showFormControls(hf)}}
                HeroFormComponent.prototype.showFormControls = function (form) {
                    return form.controls['alterEgo'] &&
                        form.controls['name'].value; // Dr. IQ
                };
                HeroFormComponent = __decorate([
                    core_1.Component({
                        selector: 'hero-form',
                        templateUrl: 'app/hero-form.component.html',
                        providers: [rfid_monitor_service_1.RfidMonitorService]
                    }), 
                    __metadata('design:paramtypes', [rfid_monitor_service_1.RfidMonitorService])
                ], HeroFormComponent);
                return HeroFormComponent;
            })();
            exports_1("HeroFormComponent", HeroFormComponent);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=hero-form.component.js.map