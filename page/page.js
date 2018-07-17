(w=>{
	const d=w.document,
	at=(e,s,x)=>{const f=e.removeEventListener;f(s, x);e.addEventListener(s,x);return f},//element,event,callback
	once=(e,s,x)=>{const f=o=>{g(s,x);x(o)},g=at(e,s,f)},
	echo=w.console||{dir:ḟ,info:ḟ,clear:ḟ},
	ḟ=x=>{},
	swapClass=(e,a,b)=>{
		const o=e.classList;
		o.remove.apply(o,a);
		o.add.apply(o,b)
	},
	handle={
		DOMContentLoaded:õ=>{//@Ready:echo.info(õ.type+':%O',õ);
			const d=õ.target;
			swapClass(d.body,['js-no'],['js','loading']);
		},
		load:õ=>{//@Load:echo.info(õ.type+':%O',õ);
			const d=õ.target,page=d.body,$id=x=>d.getElementById(x),imported=$id('elements').import;
			let fully=['loaded'];
			if(imported){
				const $element=x=>d.importNode(imported.getElementById(x),true);
				//page.appendChild();
				//...
				fully[1]='elements';
			};
			//...
			swapClass(page,['loading'],fully);
		}	
	};
	echo.clear();
	if(d.readyState!=='complete'){
		const f=once,g=s=>{f(w,s,handle[s])};
		g('DOMContentLoaded');
		g('load')
	}else{
		const o={target:d};
		isReady(o);
		isLoad(o)
	}
})(window);
