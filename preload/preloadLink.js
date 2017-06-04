function preloadLink(a,b,c,d){ 
 const _=document,o=_.createDocumentFragment();
 let x,e,i=0;
 while(e=c[i]){
	x=_.createElement('link');
	x.rel='preload';
	x.as=a;
	x.href=b+e+d;
	o.appendChild(x);
	++i;
 };
 _.head.appendChild(o);
}
//
preloadLink('style','xxx/yyy/zzz/',['a','b','c'],'.css')
