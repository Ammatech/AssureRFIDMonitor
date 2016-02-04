

component restpath='EntityService' rest='true'
{

    cfinclude (template = './QueryToArray.cfm');

    pc = getPageContext().getResponse();
    pc.setHeader( 'Access-Control-Allow-Origin', '*' );

    remote function getHospital() httpmethod='GET' returnType='array' returnFormat='json'
    {

        result =  new StoredProc(
            procedure        = "p_search_entity",
            datasource        = "SVP_PJMAssure_Development",
            parameters        = [{dbvarname="@entity_type_id", value="2", cfsqltype="CF_SQL_INTEGER"}],
            procResults        = [{resultset=1, name="resultHospital"}]).execute();

        return queryToArray(result.getProcResultSets().resultHospital);

    }


}

