	const spaces=/\s+/g,
	crumb=e=>{
		let x=e.id;
		if(x){
			x='#'+x
		}else{
			x=e.classList.toString().trim();
			if(0!==x.length){
				x='.'+x.replace(spaces,'.')
			}
		};
		return e.tagName.toLowerCase()+x;
	},
	crumbPath=e=>{
		const x=e.parentNode;
		return x?crumbPath(x).concat(crumb(e)):[];
	};

	console.dir(crumbPath($0))
