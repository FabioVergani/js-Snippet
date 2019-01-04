const randInt=(a,b)=>{//Inclusive min,max
	const M=Math,f=M.floor,i=M.ceil(a);
	return f(M.random()*(f(b)-i+1))+ i
}
