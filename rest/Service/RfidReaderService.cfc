

component restpath='RfidReaderService' rest='true'
{

    cfinclude (template = '../setting.cfm');
    cfinclude (template = '../include/QueryToArray.cfm');

    remote function getRfidReader(required numeric entityId restargsource='Path') httpmethod='get' returnType='array' returnFormat='json' restpath='{entityId}'
    {

        result =  new StoredProc(
            procedure        = "p_search_rfid_reader",
            datasource        = dataSource,
            parameters        = [{dbvarname="@entity_id", value=entityId, cfsqltype="CF_SQL_INTEGER"}],
            procResults        = [{resultset=1, name="resultRfidReader"}]).execute();

        return queryToArray(result.getProcResultSets().resultRfidReader);

    }

    remote function updateRfidReader() httpmethod='post' returnType='array' returnFormat='json' produces='application/json'
    {

        requestBody = toString( getHttpRequestData().content );
        if ( len( requestBody ) ) {
            structAppend( form, deserializeJson( requestBody ) );
        }

        // Determine if insert or update
        if (rfid_reader_id == 0){
            result =  new StoredProc(
                procedure        = "p_insert_rfid_reader",
                datasource        = dataSource,
                parameters        = [{dbvarname="@rfid_reader_code", value=rfid_reader_code, cfsqltype="CF_SQL_VARCHAR"},
                                     {dbvarname="@rfid_reader_type_id", value=rfid_reader_type_id, cfsqltype="CF_SQL_INTEGER"},
                                     {dbvarname="@description", value=description, cfsqltype="CF_SQL_VARCHAR"},
                                     {dbvarname="@ip_address", value=ip_address, cfsqltype="CF_SQL_VARCHAR"},
                                     {dbvarname="@subnet_mask", value=subnet_mask, cfsqltype="CF_SQL_VARCHAR"},
                                     {dbvarname="@serial_number", value=serial_number, cfsqltype="CF_SQL_VARCHAR"},
                                     {dbvarname="@customer_identifier", value=customer_identifier, cfsqltype="CF_SQL_VARCHAR"},
                                     {dbvarname="@reader_server_version", value=reader_server_version, cfsqltype="CF_SQL_VARCHAR"},
                                     {dbvarname="@reader_os_version", value=reader_os_version, cfsqltype="CF_SQL_VARCHAR"},
                                     {dbvarname="@reader_data_version", value=reader_data_version, cfsqltype="CF_SQL_VARCHAR"},
                                     {dbvarname="@reader_model", value=reader_model, cfsqltype="CF_SQL_VARCHAR"},
                                     {dbvarname="@reader_version", value=reader_version, cfsqltype="CF_SQL_VARCHAR"},
                                     {dbvarname="@rfid_monitor_id", value=rfid_monitor_id, cfsqltype="CF_SQL_INTEGER"}
                                     {dbvarname="@entity_id", value=entity_id, cfsqltype="CF_SQL_INTEGER"}
                                     {dbvarname="@insert_user_id", value=insert_user_id, cfsqltype="CF_SQL_INTEGER"}
                                     ],
                procResults        = [{resultset=1, name="resultRfidReader"}]).execute();
        }
        else
        {
            result =  new StoredProc(
                procedure        = "p_update_rfid_reader",
                datasource        = dataSource,
                parameters        = [{dbvarname="@rfid_reader_id", value=rfid_reader_id, cfsqltype="CF_SQL_INTEGER"},
                                     {dbvarname="@rfid_reader_code", value=rfid_reader_code, cfsqltype="CF_SQL_VARCHAR"},
                                     {dbvarname="@rfid_reader_type_id", value=rfid_reader_type_id, cfsqltype="CF_SQL_INTEGER"},
                                     {dbvarname="@description", value=description, cfsqltype="CF_SQL_VARCHAR"},
                                     {dbvarname="@ip_address", value=ip_address, cfsqltype="CF_SQL_VARCHAR"},
                                     {dbvarname="@subnet_mask", value=subnet_mask, cfsqltype="CF_SQL_VARCHAR"},
                                     {dbvarname="@serial_number", value=serial_number, cfsqltype="CF_SQL_VARCHAR"},
                                     {dbvarname="@customer_identifier", value=customer_identifier, cfsqltype="CF_SQL_VARCHAR"},
                                     {dbvarname="@reader_server_version", value=reader_server_version, cfsqltype="CF_SQL_VARCHAR"},
                                     {dbvarname="@reader_os_version", value=reader_os_version, cfsqltype="CF_SQL_VARCHAR"},
                                     {dbvarname="@reader_data_version", value=reader_data_version, cfsqltype="CF_SQL_VARCHAR"},
                                     {dbvarname="@reader_model", value=reader_model, cfsqltype="CF_SQL_VARCHAR"},
                                     {dbvarname="@reader_version", value=reader_version, cfsqltype="CF_SQL_VARCHAR"},
                                     {dbvarname="@rfid_monitor_id", value=rfid_monitor_id, cfsqltype="CF_SQL_INTEGER"}
                                     {dbvarname="@entity_id", value=entity_id, cfsqltype="CF_SQL_INTEGER"}
                                     {dbvarname="@insert_user_id", value=insert_user_id, cfsqltype="CF_SQL_INTEGER"}
                                     ],
                procResults        = [{resultset=1, name="resultRfidReader"}]).execute();
        }

        return queryToArray(result.getProcResultSets().resultRfidReader);

    }

}

