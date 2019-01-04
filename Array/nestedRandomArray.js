const randomArray=(M=>{
	const r=M.random,
	f=(a=[])=>{const n=r()*10|0;return n<8?(a[n]=n,f(a)):a},
	g=f.nested=(i=1,a=[])=>{
		let m=a;
		if(i!==0){
			const x=f();
			m=g(--i,[x,m.concat(x[0]) ].concat(m[0]))
		};
		return m
	};
	return f
})(Math);
//console.dir(randomArray())
const testArray=randomArray.nested(4);
console.dir(testArray);



/*
const randomArray=(M=>{
	const r=M.random,
	f=(a=[])=>{const n=r();return n<.8?(a[a.length]=n*10|0,f(a)):a},
	g=f.nested=(i=0,a=[])=>i!==0?g(--i,[f(), a.concat(f())]):a;
	return f
})(Math);
//console.dir(randomArray())
console.dir(randomArray.nested(6))*/
