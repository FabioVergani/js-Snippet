function decToHex(a,b){//dec,bytes
	const f=String.fromCharCode;
	let s='',i=0;
	while(i<b){s+=f(a&0xff);a>>>=8;++i}
	return s
}
