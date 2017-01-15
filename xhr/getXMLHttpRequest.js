 function XHR(a,b){//url,handle-progress
	const f=b, o=new XMLHttpRequest;
	o.open('GET',a,true);//method, url, async
	o.onprogress=function(){f(o.readyState===4,o.status===200,o);};//f(done,success,request)
	o.send(null);
 }

 XHR('https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/status',function(done,success,request){
	console.info('done:',done,'success:',success);
	console.dir(request);
 })
 
 /*

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
The status codes returned are the standard HTTP status codes. 
For example, status 200 denotes a successful request. 
If the server response doesn't explicitly specify a status code, 
XMLHttpRequest.status will assume the default value of 200.
xhr.send(null);


 * Outputs the following:
 *
 * UNSENT 0
 * OPENED 0
 * LOADING 200
 * DONE 200


XMLHttpRequest.readyState
Value	State	Description
0	UNSENT	Client has been created. open() not called yet.
1	OPENED	open() has been called.
2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
3	LOADING	Downloading; responseText holds partial data.
4	DONE	The operation is complete.

 */
