

component restpath='getRfidReaderType' rest='true'
{

    cfinclude (template = '../setting.cfm');
    cfinclude (template = '../include/QueryToArray.cfm');

    remote function getRfidReaderType() httpmethod='GET' returnType='array' returnFormat='json'
    {

        result =  new StoredProc(
            procedure        = "p_get_rfid_reader_type",
            datasource        = dataSource,
            procResults        = [{resultset=3, name="resultRfidReaderType"}]).execute();

        return queryToArray(result.getProcResultSets().resultRfidReaderType);
    }
}

