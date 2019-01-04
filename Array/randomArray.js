const randomArray=(M=>{
	const r=M.random,f=(a=[])=>{const n=r();return n<.8?(a[a.length]=n,f(a)):a};
	return f
})(Math);
//
console.dir(randomArray())
