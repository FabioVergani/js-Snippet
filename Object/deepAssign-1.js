	const Obj=window.Object,
	isObj=x=>x instanceof Obj,
	deepAssign=(a,b)=>{
		const f=isObj;
		if(f(b)){
			const g=deepAssign;
			for(const [i,d] of Obj.entries(b)){
				const c=a[i];
				a[i]=(f(c) && f(d))?g(c,d):d;
			}
		};
		return a
	};
