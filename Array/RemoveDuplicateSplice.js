
	uniques=m=>{
		let l=m.length;
		if(0!==l){
			let i=1;
			while(i<l){
			  if(i!==m.indexOf(m[i])){
				 m.splice(i,1);
				 --l
			  }else{
				 ++i
			  }
			}
		};
		return m
	}
