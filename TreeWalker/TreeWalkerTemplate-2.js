(function($){
 const Cs=$.getComputedStyle, $d=$.document, $b=$d.body;
 if($b){
	const walker=$d.createTreeWalker($b,-1,{acceptNode:function(walked){
		const e=walked, eType=e.nodeType;
		let x=1;
		if(eType!==3){
			x=2;
			if(eType===1){
				if(e.clientHeight && e.offsetHeight && e.clientWidth && e.offsetWidth){
					const f=function(a,b){return Cs(e,null).getPropertyValue(a)!==b};
					if(f('visibility','hidden')&&f('opacity','0')){
						x=3;
					};
				};
			};
		};
		return x;
	}});
 	let node,nodeNext;
	do{
		const e=node=walker.currentNode;
		console.log(e.textContent);
	}while(nodeNext=walker.nextNode());
 };
})(window);
//-------------------------------------------------------------------------------------------
