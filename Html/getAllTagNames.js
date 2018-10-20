const getAllTagNames=w=>{
	const a=[],exp=/(?:HTML)(\S+)(?:Element)/;

	Object.getOwnPropertyNames(w).forEach(s=>{
		const m=exp.exec(s);
		if(m!==null){
			a.push(m[1].toUpperCase())
		}
	});

	return a.sort();
}
//console.dir(getAllTagNames(window));
console.log(JSON.stringify(getAllTagNames(window)));


