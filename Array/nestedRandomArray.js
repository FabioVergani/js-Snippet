const randomArray=(M=>{
	const r=M.random,
	f=(a=[])=>{const n=r();return n<.8?(a[a.length]=n*10|0,f(a)):a},
	g=f.nested=(i=0,a=[])=>i!==0?g(--i,[f(), a.concat(f())]):a;
	return f
})(Math);
//console.dir(randomArray())
console.dir(randomArray.nested(6))
