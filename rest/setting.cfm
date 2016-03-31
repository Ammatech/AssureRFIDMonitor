<cfscript>

dataSource = "SVP_PJMAssure_Development";


pc = getPageContext().getResponse();
pc.setHeader( 'Access-Control-Allow-Origin', '*' );
pc.setHeader( 'Access-Control-Allow-Methods', 'POST,OPTIONS,HEAD,GET,PUT' );
pc.setHeader( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );

</cfscript>