const getDomain=x=>{
	let s='',m=x.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
	if(m!==null && m.length>2 && (m=m[2]) && m.length>0 && (s=m.split('.').reverse()).length!==0){
		s=s[1]+'.'+s[0]
	};
	return s
}
//console.log(getDomain('http://en.eee.wikipedia.org/wiki/Bookmarklet/'));
