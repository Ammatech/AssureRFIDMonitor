System.register(['@angular/core', '@angular/router-deprecated', './rfid-monitor-form.component', './rfid-reader-form.component', "./user-profile-form.component", "./administration.service", "./utility.service"], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, rfid_monitor_form_component_1, rfid_reader_form_component_1, user_profile_form_component_1, administration_service_1, utility_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (rfid_monitor_form_component_1_1) {
                rfid_monitor_form_component_1 = rfid_monitor_form_component_1_1;
            },
            function (rfid_reader_form_component_1_1) {
                rfid_reader_form_component_1 = rfid_reader_form_component_1_1;
            },
            function (user_profile_form_component_1_1) {
                user_profile_form_component_1 = user_profile_form_component_1_1;
            },
            function (administration_service_1_1) {
                administration_service_1 = administration_service_1_1;
            },
            function (utility_service_1_1) {
                utility_service_1 = utility_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_router, _http, _httpUtilityService) {
                    this._router = _router;
                    this._http = _http;
                    this._httpUtilityService = _httpUtilityService;
                    this.entitys = [];
                    this.entitySelect = false;
                    this.title = 'Next Gen Assure';
                    this.userTypes = [];
                    this.userStatuses = [];
                }
                AppComponent.prototype.ngOnInit = function () {
                    console.log('AppComponent - ngOnInit called');
                    this.onGetEntity();
                    //this.onGetUserType();
                };
                AppComponent.prototype.onGetEntity = function () {
                    var _this = this;
                    this._http.getEntity()
                        .subscribe(function (data) { return _this.entitys = data; }, function (error) { return console.log(error); }, //alert(error.toString()),
                    function () { return console.log('getEntity Finished'); });
                };
                //onGetUserType() {
                //    this._httpUtilityService.getUserType()
                //        .subscribe(
                ///            data => {
                //               this.userTypes   = data;
                //                console.log('onGetUserType = ' + JSON.stringify(data) );
                //            },
                //            error => console.log(error), //alert(error.toString()),
                //            () => console.log('onGetUserType Finished')
                //        )
                //}
                AppComponent.prototype.onSelectEntity = function (entityId) {
                    console.log('onSelectEntity Called');
                    this.entitySelect = true;
                    this.entityId = entityId;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.component.html',
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
                        providers: [router_deprecated_1.ROUTER_PROVIDERS, administration_service_1.AdministrationService, utility_service_1.UtilityService]
                    }),
                    router_deprecated_1.RouteConfig([
                        {
                            path: '/rfidmonitor',
                            name: 'RfidMonitor',
                            component: rfid_monitor_form_component_1.RfidMonitorFormComponent
                        },
                        {
                            path: '/rfidreader',
                            name: 'RfidReader',
                            component: rfid_reader_form_component_1.RfidReaderFormComponent
                        },
                        {
                            path: '/userprofile',
                            name: 'UserProfile',
                            component: user_profile_form_component_1.UserProfileFormComponent
                        },
                    ]), 
                    __metadata('design:paramtypes', [router_deprecated_1.Router, administration_service_1.AdministrationService, utility_service_1.UtilityService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map