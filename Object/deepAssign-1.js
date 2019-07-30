	const Object=window.Object,
	isObject=x=>x instanceof Object,
	deepAssign=(a,b)=>{
		const f=isObject;
		if(f(b)){
			for(const[i,B] of Object.entries(b)){
				a[i]=(i in a && f(B) && f(a[i]))?deepAssign(a[i],B):B;
			}
		};
		return a
	};
