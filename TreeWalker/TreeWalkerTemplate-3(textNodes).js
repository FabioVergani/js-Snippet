(function($){
 const  $d=$.document, $b=$d.body, testi=[];
 if($b){
	const ReSkip=/VIDEO|CANVAS|AUDIO/, ReImage=/IMG|svg/i, ReEmpty=/^\s*$/, f=function(a,b,c){if(ReEmpty.test(b)!==true){testi.push(a+b.trim()+c)}}, Cs=$.getComputedStyle, walker=$d.createTreeWalker($b,-1,{acceptNode:function(walked){
		let x=2;
		const e=walked;
		switch(e.nodeType){
		 case 1:
			if(e.clientHeight && e.offsetHeight && e.clientWidth && e.offsetWidth){
				const s=e.tagName;
				if(ReSkip.test(s)!==true){
				 const o=Cs(e,null);
				 if(o.getPropertyValue('visibility')!=='hidden' && o.getPropertyValue('opacity')!=='0'){
					if(ReImage.test(s)){
						f('\u3018',e.alt,'\u3019');
					}else{
						x=3;
					};
				 };
				};
			};
			break;
			case 3:x=1;
		};
		return x;
	}});
	do{
		const e=walker.currentNode;
		f('',e.textContent,'')
	}while(walker.nextNode());
	console.log(testi.join('\r\n'));
 };
})(window);
