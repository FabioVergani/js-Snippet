dumfunction dumpComputedStyleOf(x){
	const m=getComputedStyle(x),l=m.length,o=Object.create(null);
	let i=0;
	while(i<l){
		const p=m[i];
		o[p]=m.getPropertyValue(p)
		++i
	};
	return o;
}

//dumpComputedStyleOf(document.body);
