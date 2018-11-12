const category=['a', 'b','c','d'];

const pickcasual=m=>{
	return m[(Math.random()*m.length)<<0];
};

console.log(pickcasual(category))
