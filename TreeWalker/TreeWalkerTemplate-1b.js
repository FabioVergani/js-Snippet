(function($){
 const Cs=$.getComputedStyle, $d=$.document, $b=$d.body;
 if($b){
	const walker=$d.createTreeWalker($b,1,{acceptNode:function(walked){
		const e=walked;
		let x=2;
		if(e.clientHeight && e.offsetHeight && e.clientWidth && e.offsetWidth){
			const not=function(a,b){return Cs(e,null).getPropertyValue(a)!==b};
			if(not('visibility','hidden')){
				if(not('opacity','0')){
					x=1;
				};
			};
		};
		return x;
	}});
 	let node,nodeNext;
	do{
		const e=node=walker.currentNode;
		console.log(e.tagName);
	}while(nodeNext=walker.nextNode());
	//console.warn('nodeLast',node,'nodeNext:',nodeNext);
 };
})(window);
