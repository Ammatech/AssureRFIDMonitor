

component restpath='RfidMonitorService' rest='true'
{

    cfinclude (template = './QueryToArray.cfm');

    pc = getPageContext().getResponse();
    pc.setHeader( 'Access-Control-Allow-Origin', '*' );
    pc.setHeader( 'Access-Control-Allow-Methods', 'POST,OPTIONS,HEAD,GET,PUT' );
    pc.setHeader( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );

    remote function getRfidMonitor(required numeric entityId restargsource='Path') httpmethod='get' returnType='array' returnFormat='json' restpath='{entityId}'
    {

        result =  new StoredProc(
            procedure        = "p_get_rfid_monitor",
            datasource        = "SVP_PJMAssure_Development",
            parameters        = [{dbvarname="@entity_id", value=entityId, cfsqltype="CF_SQL_INTEGER"}],
            procResults        = [{resultset=1, name="resultRfidMonitor"}]).execute();

        return queryToArray(result.getProcResultSets().resultRfidMonitor);

    }

//remote function updateRfidMonitor(numeric rfidMonitorId restargsource='form' ,
//                                  string rfidMonitorCode restargsource='form',
//                                  string description restargsource='form') httpmethod='post' returnType='string' returnFormat='json' produces='application/json'
    remote function updateRfidMonitor() httpmethod='post' returnType='string' returnFormat='json' produces='application/json'
    {

        requestBody = toString( getHttpRequestData().content );
        if ( len( requestBody ) ) {
            structAppend( form, deserializeJson( requestBody ) );
        }

        test = 'rfidMonitorId : ' & rfidMonitorId;

        resultForm = 'Form = ' & writeDumpToText(form);
        requestBody = 'requestBody = ' & writeDumpToText(requestBody);

        resultArgument = ' Arguments = ' & writeDumpToText(arguments);

        result = requestBody & chr(13) & chr(13) &
        resultForm & chr(13) & chr(13) &
        resultArgument & chr(13) & chr(13) &
        test;

        return result;

    }

    public string function writeDumpToText( required any input ) {
// Write the dump to an output buffer.
        savecontent variable="local.result" {
            writeDump( var = input, format = "text" );
        }
// When you dump to a text output, it wraps the output in PRE tags. We can
// strip those out and defer to the calling context to add them back in if
// necessary.
        result = reReplaceNoCase( result, "^<pre>|</pre>\s*$", "", "all" );
        return( result );
    }
}

