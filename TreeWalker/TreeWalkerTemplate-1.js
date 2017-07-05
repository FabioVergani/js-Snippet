(function($){
 const Cs=$.getComputedStyle, $d=$.document, $b=$d.body;
 if($b){
	const walker=$d.createTreeWalker($b,1,{acceptNode:function(walked){
		const e=walked;
		let x=2;
		if(e.clientHeight && e.offsetHeight && e.clientWidth && e.offsetWidth){
			const o=Cs(e,null);
			let s=o.getPropertyValue('visibility');
			if(s!=='hidden'){
				s=o.getPropertyValue('opacity');
				if(s!=='0'){
					if(s>.1){
						x=1;
					};
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


/*
The TreeWalker.nextNode() method 
moves the current Node to the next visible node in the document order, 
and returns the found node. It also moves the current node to this one. 
If no such node exists, returns null and the current node is not changed.

1:NodeFilter.FILTER_ACCEPT
2:NodeFilter.FILTER_REJECT (For TreeWalker, child nodes are also rejected. For NodeIterator, this flag is synonymous with FILTER_SKIP.)
3:NodeFilter.FILTER_SKIP (The children of skipped nodes are still considered. This is treated as "skip this node but not its children".)
*/
