<cfscript>
    public array function queryToArray(required query data)
    {
        var columns = listToArray(data.columnList);
        for (k=1; k <= ArrayLen(columns); k++){
            columns[k] = columns[k].toLowerCase();
        }

        var queryArray = arrayNew(1);

        for(i=1; i <= data.RecordCount; i++){

            row = StructNew();
            for (j=1; j <= ArrayLen(columns); j++){
                columnName = columns[j];
                row[columnName] = data[columnName][i];
            }
            arrayAppend(queryArray, row);
        }
        return(queryArray);
    }

    public string function writeDumpToText( required any input ) {
        // Write the dump to an output buffer.
        savecontent variable="local.result" {
            writeDump( var = input, format = "text" );
        }
        result = reReplaceNoCase( result, "^<pre>|</pre>\s*$", "", "all" );
        return( result );
    }

</cfscript>