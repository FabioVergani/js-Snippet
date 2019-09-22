const logEach=o=>{
	const a=[],b=[];
	for(const p in o){
		b[a.push(p+':%O')]=o[p]
	};
	b[0]=a.join('\n');
	console.log.apply(null,b)
};


/*
	logEach({
		a,
		b,
		c
	});
  
 */
