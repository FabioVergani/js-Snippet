const logEach=o=>{
	const a=[],b=[],s={
		__proto__:null,
		'object':'O',
		'number':'d',
		'string':'s'
	};
	for(const p in o){
		const v=o[p],i=typeof v;
		b[a.push([p,i in s?s[i]:'O'].join(':%'))]=v
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
