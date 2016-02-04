

component restpath='RestEntityService' rest='true'
{

    cfinclude (template = './QueryToArray.cfm');

    pc = getPageContext().getResponse();
    pc.setHeader( 'Access-Control-Allow-Origin', '*' );

    remote function getRfidMonitor() httpmethod='GET' returnType='array' returnFormat='json'
    {

        result =  new StoredProc(
            procedure        = "p_get_rfid_monitor",
            datasource        = "SVP_PJMAssure_Development",
            procResults        = [{resultset=1, name="resultRfidMonitor"}]).execute();

        return queryToArray(result.getProcResultSets().resultRfidMonitor);

    }


}

