(w=>{
	const $el=w.document.querySelector('.el');

	if($el){
		const move=event=>{
			console.log('move');
		};

		const up=()=>{
			console.log('up');
			handlers('remove').addEventListener('mousedown',down)
		};

		const out=event=>{
			console.log('out');
			up()
		};

		const down=()=>{
			console.log('down');
			handlers('add').removeEventListener('mousedown',down);
		};

		const pairs=[
			['mousemove',move],
			['mouseout',out],
			['mouseup',up]
		];

		const handlers=s=>{
			const e=$el, f=w[s+'EventListener'];
			for(const m of pairs){
				f.apply(e,m)
			};
			return e
		};

		$el.addEventListener('mousedown',down);
	}

})(window);
