//alert('ES6');
(w=>{
	const f=x=>{},echo=w.console||{dir:f,info:f,clear:f},
	d=w.document,
	swapClass=(e,a,b)=>{const o=e.classList;o.remove.apply(o,a);o.add.apply(o,b)},
	at=(e,s,x)=>{const f=e.removeEventListener;f(s,x);e.addEventListener(s,x);return f},//element,event,callback_ogni-volta-che-occorre-evento
	once=(e,s,x)=>{const f=o=>{g(s,x);x(o)},g=at(e,s,f)};	//element,event,callback_solo-la-prima-volta-che-occorre-evento
	echo.clear();
	(x=>{
		const f={
			DOMContentLoaded:e=>{
				const d=e.target;
				swapClass(d.documentElement,['js-no'],['js','init-start']);
			},
			load:e=>{
				const d=e.target,page=d.documentElement;//,page=d.body;$id=x=>d.getElementById(x)
				//
				//page.appendChild($imported('blog-post'));
				//...
				swapClass(page,['init-start'],['init-end']);
			}	
		},
		o={target:d};
		if(x!=='complete'){
			const g=i=>{once(w,i,f[i])};
			if(x!=='interactive'){g('DOMContentLoaded')}else{f.DOMContentLoaded(o)};
			g('load')
		}else{
			f.DOMContentLoaded(o);
			f.load(o)
		}
	})(d.readyState)
})(window);
