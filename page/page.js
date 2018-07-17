(w=>{
	const d=w.document,
	at=(e,s,x)=>{const f=e.removeEventListener;f(s, x);e.addEventListener(s,x);return f},//element,event,callback
	once=(e,s,x)=>{const f=o=>{g(s,x);x(o)},g=at(e,s,f)},
	echo=w.console||{dir:ḟ,info:ḟ,clear:ḟ},
	ḟ=x=>{},
	_DOMContentLoaded=õ=>{//@Ready:echo.info(õ.type+':%O',õ);
		const d=õ.target,page=d.body,classes=page.classList;
		classes.remove('js-no');
		classes.add('js','loading');
		
		
	},
	_load=õ=>{//@Load:echo.info(õ.type+':%O',õ);
		const d=õ.target,page=d.body,classes=page.classList;
		classes.add('loaded')
		
		
	};
	echo.clear();
	if(d.readyState!=='complete'){
		const f=once,g=s=>{f(w,s,eval('_'+s))};
		g('DOMContentLoaded');
		g('load')
	}else{
		const o={target:d};
		isReady(o);
		isLoad(o)
	}
})(window);
