const randomText=(max=30,min=10)=>{
	const r=Math.random;
	let f=(a,b)=>(r()*(a-b+1))<<0,i=f(max,min),m=Array(i+9);
	while(i){
		m[--i]=(~~(r()*36)).toString(36)
	};
	return 	m.join('')
};
console.log(randomText())
