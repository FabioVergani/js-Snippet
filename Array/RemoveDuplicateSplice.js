const uniques=m=>{
	if(null!==m){//<
		let i=m.length;
		while(0!==i){
		if(i!==m.indexOf(m[i])){
			m.splice(i,1);
			--i
		};
		--i
		}
	}
};

//uniques([1,2,3,3,'a',4,5,'a',6,7,8,9,10,'a',11,12,'a',13]);



/*
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
*/
