const request=(url,method= 'GET',async=false)=>{
	return new Promise((a,b)=>{//resolve,reject
		const e=new XMLHttpRequest();
		e.addEventListener('readystatechange',o=>{
			const e=o.target;
			if(e.readyState===4){const n=e.status;(n===200||n===0?a:b)(e)}
		});
		e.open(method,url,async);
		e.send(null)
	});
};
//
request('./1.json').then(xhr=>{
	const $=JSON.parse(xhr.responseText).$;
	console.dir($)
}).catch(fail=>{
	console.error(fail)
});
