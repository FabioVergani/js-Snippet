		const m=[];

		let i=1,l=m.length;

		while(i<l){
		  if(i!==m.indexOf(m[i])){
			 m.splice(i,1);
			 --l
		  }else{
			 ++i
		  }
		};
