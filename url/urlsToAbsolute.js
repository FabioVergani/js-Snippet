const urlsToAbsolute=(function(a){
 function g(x){const e=a;e.href=x;return e.href}
 const e=/^((https?|data):|www\.)/i;
 return function(n,t){
	const m=[],p=e,f=g;
	for(const x of n){const y=t,s=x.getAttribute(y);if(p.test(s)!==true){x.setAttribute(y,f(s))};m[m.length]=x};
	return m;
 }
})(document.createDocumentFragment().appendChild(document.createElement('a')));
//
console.log(urlsToAbsolute(document.images,'src'))
