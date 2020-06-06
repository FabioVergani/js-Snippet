(w=>{
	const d=w.document;

	const $el=d.querySelector('.wheel');
	if($el){
		const trace=msg=>{console.log(msg)},
		move=event=>{
			trace('move');
		},
		up=()=>{
			trace('up');
			listeners('remove','add')
		},
		out=event=>{
			trace('out');
			up()
		},
		down=()=>{
			trace('down');
			listeners('add','remove')
		},
		m=[
			['mousemove',move],
			['mouseout',out],
			['mouseup',up]
		],
		listeners=(a,b)=>{
			const e=$el, p='EventListener', f=w[a+p];
			for(const x of m){
				f.apply(e,x)
			};
			w[b+p].call(e,'mousedown',down)
		};

		$el.addEventListener('mousedown',down);
	}

	//#

})(window);
