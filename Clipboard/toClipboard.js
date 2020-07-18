(w=>{
	const { clipboard } = w.navigator,
	d=w.document,
	textarea=d.getElementById('textarea'),
	copy=d.getElementById('btnCopy'),
	cut=d.getElementById('btnCut');

	const toClipboard=(e,c,r)=>{
		const s=e.value;
		if(s.length){
			e.readonly=true;
			const a=e.selectionStart, b=e.selectionEnd, x=a!==b;
			c.disabled=true;
			clipboard.writeText(x?s.substring(a,b):s).finally(()=>{
				if(x && r){
					e.value=s.substring(0,a)+s.substring(b)
				};
				c.disabled=e.readonly=false
			})
		}
	};

	copy.addEventListener('click',()=>{
		toClipboard(textarea,copy)
	});

	cut.addEventListener('click',()=>{
		toClipboard(textarea,copy,true)
	});

})(window);
