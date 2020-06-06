(w=>{
	const d=w.document;

	const $el=d.querySelector('.wheel');
	if($el){
		//let boundingClientRect=null;
		const trace=msg=>{console.log(msg)},
		move=event=>{
			event.preventDefault();
			console.log('move',event.type);
		},
		up=()=>{
			trace('up');
			listeners('remove','add')
		},
		out=()=>{
			trace('out');
			up()
		},
		down=event=>{
			event.preventDefault();
			const rect=$el.getBoundingClientRect();
			trace('down:%O',{rect});
			listeners('add','remove')
		},
		m1=[
			['touchmove',move],
			['mousemove',move],
			['mouseout',out],
			['touchend',up],
			['mouseup',up]
		],
		m2=[
			['touchstart',down],
			['mousedown',down]
		],
		f=(p,m)=>{
			const e=$el,f=w[p+'EventListener'];
			for(const x of m){f.apply(e,x)}
		},
		listeners=(a,b)=>{
			f(a,m1);
			f(b,m2);
		};
		f('add',m2);
		$el.addEventListener('mousedown',down);
	}

	//#

})(window);
