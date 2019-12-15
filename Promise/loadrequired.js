(w=>{
	const {
		console,
		Promise,
	}=w,
	d=w.document,
	frag=d.createDocumentFragment(),
	nest=x=>frag.appendChild(d.createElement(x)),
	required=[
		'a.js',
		'b.js',
		'c.js',
		'd.js',
		'e.js',
	];
	/*
		...
	*/
	required.forEach((v,i,m)=>{
		const e=nest('link');
		e.rel='preload';
		e.as='script';
		e.href='./res/script/'+v;
		m[i]=new Promise(f=>e.onload=()=>f(e))
	});
	d.head.appendChild(frag);
	Promise.all(required).then(m=>{
		let v;
		while(v=m.shift()){
			const e=nest('script');
			e.src=v.href;
			v.replaceWith(e)
		}
	})
})(window);
