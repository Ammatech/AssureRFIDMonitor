

component restpath='RfidMonitorService' rest='true'
{

    cfinclude (template = './QueryToArray.cfm');

    pc = getPageContext().getResponse();
    pc.setHeader( 'Access-Control-Allow-Origin', '*' );

    remote function getRfidMonitor(required numeric id restargsource='Path') httpmethod='GET' returnType='array' returnFormat='json' restpath='{id}'
    {

        result =  new StoredProc(
            procedure        = "p_get_rfid_monitor",
            datasource        = "SVP_PJMAssure_Development",
            parameters        = [{dbvarname="@entity_id", value=id, cfsqltype="CF_SQL_INTEGER"}],
            procResults        = [{resultset=1, name="resultRfidMonitor"}]).execute();

        return queryToArray(result.getProcResultSets().resultRfidMonitor);

    }


}

