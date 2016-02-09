System.register([], function(exports_1) {
    var RfidMonitor;
    return {
        setters:[],
        execute: function() {
            RfidMonitor = (function () {
                function RfidMonitor(rfidMonitorId, rfidMonitorCode, description, entityId) {
                    this.rfidMonitorId = rfidMonitorId;
                    this.rfidMonitorCode = rfidMonitorCode;
                    this.description = description;
                    this.entityId = entityId;
                }
                return RfidMonitor;
            })();
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