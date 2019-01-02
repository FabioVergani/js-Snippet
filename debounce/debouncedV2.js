const debounced=(f,n=300)=>{
	const a=setTimeout,b=clearTimeout;
	let e=null;
	return (...args)=>{
		if(null!==e){b(e)};
		e=a(()=>{f(...args);e=null},n);
	}
}
