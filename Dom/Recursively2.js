//Recursively!
const walkDom=(depth,nth,node)=>{
	console.log('\t'.repeat(depth),nth,node.tagName||'text');

	if((node=node.firstChild) && 1===node.nodeType){
		++depth
	};
	while(null!==node){
		walkDom(depth,nth,node);
		if(null!==(node=node.nextSibling) && 1===node.nodeType){
			++nth
		}
	}
};
//run:
walkDom(0,1,document.documentElement);
