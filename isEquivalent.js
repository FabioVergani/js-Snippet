function isEquivalent(a,b){
	if(a !== b){
		const f=Object.getOwnPropertyNames, A=f(a), B=f(b);
		return A.length !== B.length ? false : !A.some(i=>A[i] !== B[i])
	};
	return true
}
