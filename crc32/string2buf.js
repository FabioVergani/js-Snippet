const string2buf=function(s){
	const g=(e,f)=>{
		let i=0,l=e.length;
		while(i<l){
			let x=s.charCodeAt(i);
			if(++i<l){
				const a=55296,b=64512;//a:0xd800,b:0xfc00
				if((x&b)===a){
					const c=s.charCodeAt(i),d=56320;//d:0xdc00
					if((c&b)===d){x=65536+((x-a)<<10)+(c-d);++i}//0x10000
				}
			};
			f(x)
		}
	};
	let n=0;
	g(s,c=>{n+=c<128?1:c<2048?2:c<65536?3:4});//0x80,0x800,0x10000
	const u=new Uint8Array(n);
	n=0;
	g(u,c=>{
		const v=128,m=u;
		if(c<v){
			m[n]=c;
			++n
		}else{
			const a=c>>>6,G=63,b=c&G;//0x3f
			if(c<2048){
				m[n]=192|a;//0xC0
			}else{
				const d=c>>>12,e=a&G;
				if(c<65536){
					m[n]=224|d;//0xE0
				}else{
					m[n]=240|(c>>>18);//0xf0
					m[++n]=v|(d&G);
				};
				m[++n]=v|e;
			};
			m[++n]=v|b
		}
	});
	return u;
};
