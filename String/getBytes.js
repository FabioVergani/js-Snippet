const getBytes=s=>{
	let i=s.length;
	const m=Array(i);
	while(i){m[--i]=s.charCodeAt(i)};
	return m;
}
//getBytes("abcde");//[97, 98, 99, 100, 101]
