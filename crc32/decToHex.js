function decToHex(a,b){//dec,bytes
	const f=String.fromCharCode;
	let i=0,s='';
	while(i<b){
		s+=f(a&255);//0xff
		a>>>=8;
		++i
	};
	return s
}
