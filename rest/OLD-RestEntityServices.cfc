component restpath='RestEntityService' rest='true'
{
    pc = getPageContext().getResponse();
    pc.setHeader( 'Access-Control-Allow-Origin', '*' );

    remote function getRfidMonitor() httpmethod='GET' returnType='array' returnFormat='json'
    {

        result =  new StoredProc(
            procedure        = "p_get_rfid_monitor",
            datasource        = "SVP_PJMAssure_Development",
            procResults        = [
            {resultset=1, name="resultRfidMonitor"}
                ]
                ).execute();

//return result; // .getProcResultSets().resultRfidMonitor;
        return queryToArray(result.getProcResultSets().resultRfidMonitor);

    }


    public array function queryToArray(required query data, any columnLabels=false)
    {
        var columns = listToArray(arguments.data.columnList);
        if(arguments.columnLabels != false){
            columns = listToArray(arguments.columnLabels);
        }

        var queryArray = arrayNew(1);

        for(i=1; i <= arguments.data.RecordCount; i++){

            row = StructNew();
            for (j=1; j <= ArrayLen(columns); j++){
                columnName = columns[j].toLowerCase();
                row[columnName] = arguments.data[columnName][i];
            }
            arrayAppend(queryArray, row);
        }
        return(queryArray);
    }
}

