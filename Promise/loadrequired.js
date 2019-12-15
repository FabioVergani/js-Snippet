(w=>{
	const {
		console,
		Promise,
	}=w,
	d=w.document,
	frag=d.createDocumentFragment(),
	nest=x=>frag.appendChild(d.createElement(x)),
	js=[
		'a',
		'b',
		'c',
		'd',
		'e',
	];
	/*
		...
	*/
	js.forEach((v,i,m)=>{
		const e=nest('link');
		e.rel='preload';
		e.as='script';
		e.href=['./res/script/','.js'].join(v);
		m[i]=new Promise(f=>e.onload=()=>f(e))
	});
	d.head.appendChild(frag);
	Promise.all(js).then(m=>{
		js.length=0;
		let v;
		while(v=m.shift()){
			const e=nest('script');
			e.src=v.href;
			v.replaceWith(e)
		}
	})
})(window);
