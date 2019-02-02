//Recursively!
const walkDom=(depth,nth,e)=>{
	console.log('\t'.repeat(depth),nth,e.tagName||e.nodeValue);
	if((e=e.firstChild) && 1===e.nodeType){
		++depth
	};
	while(null!==e){
		walkDom(depth,nth,e);
		if(null!==(e=e.nextSibling) && 1===e.nodeType){
			++nth
		}
	}
};
//run:
walkDom(0,1,document.documentElement);
