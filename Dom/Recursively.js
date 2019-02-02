//Recursively!
const walkDom=node=>{
	let e=node;
	console.log(e);
	e=e.firstChild;
	while(null!==e){
		walkDom(e);
		e=e.nextSibling;
	}
};
//run:
walkDom(document.documentElement);
