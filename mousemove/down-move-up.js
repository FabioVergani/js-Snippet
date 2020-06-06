(w=>{
	const d=w.document;

	const $el=d.querySelector('.wheel');
	if($el){
		const trace=msg=>{console.log(msg)},
		move=event=>{
			event.preventDefault();
			trace('move');
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

})(window);
