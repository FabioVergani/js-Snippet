const arrayBufferToBase64=buffer=>{

	let imageStr = '';
	[...new Uint8Array(buffer)].forEach(x=>imageStr+=String.fromCharCode(x));
	imageStr=btoa(imageStr);

	//.src =  'data:image/jpeg;base64,' + imageStr;
};


const ok=resp=>{
	resp.arrayBuffer().then(arrayBufferToBase64);
	console.log('%s\n%s:%O\n',url,resp.statusText,resp)//resp.blob()
};

const ko=(resp,url)=>{
	console.error('%s\n%O',url,resp)
};


fetchUrl(new Request(url),ok,ko)
