 function XHR(a,b,c='GET',d=200,e=null){//url,handle-progress
	const f=b, o=new XMLHttpRequest;
	o.open(c,a,true);//method,url,async
	o.onprogress=function(){f(o.readyState===4,o.status===200,o);};//f(done,success,request)
	o.send(e);
 }


//function XHR(a,b,c='GET',d=200,e=null){const f=b, o=new w.XMLHttpRequest;o.open(c,a,true);o.onload=function(){f(o.status===200,o);};o.send(e);}
