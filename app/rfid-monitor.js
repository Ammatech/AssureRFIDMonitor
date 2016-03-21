System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var RfidMonitor;
    return {
        setters:[],
        execute: function() {
            RfidMonitor = (function () {
                function RfidMonitor(rfid_monitor_id, rfid_monitor_code, description, entity_id) {
                    this.rfid_monitor_id = rfid_monitor_id;
                    this.rfid_monitor_code = rfid_monitor_code;
                    this.description = description;
                    this.entity_id = entity_id;
                }
                return RfidMonitor;
            }());
            exports_1("RfidMonitor", RfidMonitor);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=rfid-monitor.js.map