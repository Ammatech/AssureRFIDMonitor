

component restpath='getUserType' rest='true'
{

    cfinclude (template = '../setting.cfm');
    cfinclude (template = '../include/QueryToArray.cfm');

    remote function getUserType() httpmethod='GET' returnType='array' returnFormat='json'
    {

        result =  new StoredProc(
            procedure        = "p_get_user_type",
            datasource        = dataSource,
            procResults        = [{resultset=3, name="resultUserType"}]).execute();

        return queryToArray(result.getProcResultSets().resultUserType);
    }
}

