(function(w){
	var m=['js-init'],
	d=w.document,
	r=function(x){return d.getElementsByTagName(x)[0]},
	p='documentElement',
	h=d[p],
	o=h||(d[p]=r('html'));//ora è sicuramente disponibile 'document.documentElement'
	//
	if(o.id==='page'){
		if(h=d.head||(d[p]=r(p))){//ora è sicuramente disponibile 'document.head'
			r=d.scripts[0];//nb: questo è sempre il primo script della pagina
			p=r.getAttribute('src');
			h.removeChild(r);
			p=p.substring(0,p.lastIndexOf('/'))+'/page';//path-prefix
			try{
				new w.Function('(a=0)=>a');
				p+='-es6'
			}catch(r){//console.warn(r);
				m[1]='es6-no'
			}finally{
				(d[r='createDocumentFragment']||(d[r]=function(){return d.createElement('span')}));
				d[r]().appendChild(r=d.createElement('script'));//paranoid polyfill :D
				r.src=p+'-dev.js';//nb:omit '-dev' in produzione
				h.appendChild(r)
			}
		}
	}else{
		m[1]='page-unknown'
	};
	r='\u0020';
	o[p='className']=o[p].replace('notify'+r,'').replace('js-no',m.join(r));
})(window);
