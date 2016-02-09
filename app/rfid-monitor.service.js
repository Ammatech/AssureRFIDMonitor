System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map', "angular2/http"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, http_2, http_3;
    var RfidMonitorService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (http_2_1) {
                http_2 = http_2_1;
                http_3 = http_2_1;
            }],
        execute: function() {
            RfidMonitorService = (function () {
                function RfidMonitorService(_http) {
                    this._http = _http;
                }
                RfidMonitorService.prototype.getRfidMonitor = function (entityId) {
                    var headers = new http_2.Headers();
                    headers.append('Accept', 'text/json');
                    var requestOptions = new http_3.RequestOptions();
                    requestOptions.headers = headers;
                    var url = 'https://magellan.ammatech.com.au/rest/Assure_Dev/RfidMonitorService/' + entityId;
                    console.log(url);
                    return this._http.get(url, requestOptions)
                        .map(function (res) { return res.json(); }); //console.log(res)); //
                };
                RfidMonitorService.prototype.updateRfidMonitor = function (rfidMonitor) {
                    var headers = new http_2.Headers();
                    headers.append('Accept', 'application/json');
                    headers.append('Content-Type', 'application/json');
                    //headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    //headers.append('Access-Control-Allow-Headers', 'POST,OPTIONS,HEAD,GET,PUT');
                    var requestOptions = new http_3.RequestOptions();
                    requestOptions.headers = headers;
                    var body = JSON.stringify(rfidMonitor); // Does not work
                    //let body: string = ''; //works 09Feb
                    //let body: string = '//' + JSON.stringify(rfidMonitor); //No good
                    //let body: string = '[' + JSON.stringify(rfidMonitor) + ']'; //No good
                    //let body: string = '"rfidMonitorId"="0","rfidMonitorCode"="xx","description"="xx","entityId"="24"'; //Works but thinks it is just one field "RFIDMONITORID
                    //let body: string = '"rfidMonitorId":"0","rfidMonitorCode":"xx","description":"xx","entityId":"24"'; // NO GOOD java.lang.IllegalArgumentException at coldfusion.filter.FormScope.parseQueryString(FormScope.java:551)
                    //let body: string = "'rfidMonitorId':'0','rfidMonitorCode':'xx'"; // NO GOOD - 	java.lang.IllegalArgumentException
                    //let body: string = '"rfidMonitorId"="0"'; //Works
                    //let body: string = '"rfidMonitorId":"0"'; // ????????
                    //body = body.replace(/:/g, "=");
                    //body = body.replace("{", "");
                    //body = body.replace("}", "");
                    //let body: string = '"Form" = ' + JSON.stringify(rfidMonitor);
                    //let body: string = '{"rfidMonitorId":"0","rfidMonitorCode":"xx","description":"xx","entityId":"24"}'; // NO GOOD - 	java.lang.IllegalArgumentException
                    console.log(body);
                    var url = 'https://magellan.ammatech.com.au/rest/Assure_Dev/RfidMonitorService';
                    console.log(url);
                    return this._http.post(url, body, requestOptions)
                        .map(function (res) { return console.log(res); }); //
                };
                RfidMonitorService.prototype.getHospital = function () {
                    var headers = new http_2.Headers();
                    headers.append('Accept', 'text/json');
                    var requestOptions = new http_3.RequestOptions();
                    requestOptions.headers = headers;
                    return this._http.get('https://magellan.ammatech.com.au/rest/Assure_Dev/EntityService', requestOptions)
                        .map(function (res) { return res.json(); }); //console.log(res)); //
                };
                RfidMonitorService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], RfidMonitorService);
                return RfidMonitorService;
            })();
            exports_1("RfidMonitorService", RfidMonitorService);
        }
    }
});
//# sourceMappingURL=rfid-monitor.service.js.map