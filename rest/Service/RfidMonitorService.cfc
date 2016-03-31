

component restpath='RfidMonitorService' rest='true'
{

    cfinclude (template = '../setting.cfm');
    cfinclude (template = '../include/QueryToArray.cfm');

    remote function getRfidMonitor(required numeric entityId restargsource='Path') httpmethod='get' returnType='array' returnFormat='json' restpath='{entityId}'
    {

        result =  new StoredProc(
            procedure        = "p_get_rfid_monitor",
            datasource        = dataSource,
            parameters        = [{dbvarname="@entity_id", value=entityId, cfsqltype="CF_SQL_INTEGER"}],
            procResults        = [{resultset=1, name="resultRfidMonitor"}]).execute();

        return queryToArray(result.getProcResultSets().resultRfidMonitor);

    }

    remote function updateRfidMonitor() httpmethod='post' returnType='array' returnFormat='json' produces='application/json'
    {

        requestBody = toString( getHttpRequestData().content );
        if ( len( requestBody ) ) {
            structAppend( form, deserializeJson( requestBody ) );
        }

        // Determine if insert or update
        if (rfid_monitor_id == 0){
            result =  new StoredProc(
                procedure        = "p_insert_rfid_monitor",
                datasource        = dataSource,
                parameters        = [{dbvarname="@rfid_monitor_code", value=rfid_monitor_code, cfsqltype="CF_SQL_VARCHAR"},
                                     {dbvarname="@description", value=description, cfsqltype="CF_SQL_VARCHAR"},
                                     {dbvarname="@entity_id", value=entity_id, cfsqltype="CF_SQL_INTEGER"}],
                procResults        = [{resultset=1, name="resultRfidMonitor"}]).execute();
        }
        else
        {
            result =  new StoredProc(
                procedure        = "p_update_rfid_monitor",
                datasource        = dataSource,
                parameters        = [{dbvarname="@rfid_monitor_id", value=rfid_monitor_id, cfsqltype="CF_SQL_INTEGER"},
                                     {dbvarname="@rfid_monitor_code", value=rfid_monitor_code, cfsqltype="CF_SQL_VARCHAR"},
                                     {dbvarname="@description", value=description, cfsqltype="CF_SQL_VARCHAR"}],
                procResults        = [{resultset=1, name="resultRfidMonitor"}]).execute();
        }

        return queryToArray(result.getProcResultSets().resultRfidMonitor);

    }

}

