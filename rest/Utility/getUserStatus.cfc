

component restpath='getUserStatus' rest='true'
{

    cfinclude (template = '../setting.cfm');
    cfinclude (template = '../include/QueryToArray.cfm');

    remote function getUserStatus() httpmethod='GET' returnType='array' returnFormat='json'
    {

        result =  new StoredProc(
            procedure        = "p_get_user_status",
            datasource        = dataSource,
            procResults        = [{resultset=3, name="resultUserStatus"}]).execute();

        return queryToArray(result.getProcResultSets().resultUserStatus);
    }
}

