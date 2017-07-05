(function($){
 const  $d=$.document, $b=$d.body;
 if($b){
	const Cs=$.getComputedStyle, not=function(a,b,c){return Cs(a,null).getPropertyValue(b)!==c}, walker=$d.createTreeWalker($b,-1,{acceptNode:function(walked){
		const e=walked, t=e.nodeType;
		let x=1;
		if(t!==3){
			x=2;
			if(t===1){
				if(e.clientHeight && e.offsetHeight && e.clientWidth && e.offsetWidth){
					if(not(e,'visibility','hidden')&&not(e,'opacity','0')){
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
		console.log(e.tagName,e.textContent);
	}while(nodeNext=walker.nextNode());
 };
})(window);
//-------------------------------------------------------------------------------------------
