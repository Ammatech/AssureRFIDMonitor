

component restpath='EntityService' rest='true'
{

    cfinclude (template = '../setting.cfm');
    cfinclude (template = '../include/QueryToArray.cfm');

    remote function getHospital() httpmethod='GET' returnType='array' returnFormat='json'
    {

        result =  new StoredProc(
            procedure        = "p_get_entity",
            datasource        = dataSource,
            parameters        = [{dbvarname="@entity_type_code", value="Hospital", cfsqltype="CF_SQL_VARCHAR"}],
            procResults        = [{resultset=1, name="resultHospital"}]).execute();

        return queryToArray(result.getProcResultSets().resultHospital);

    }


}

