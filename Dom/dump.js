	(w=>{
		const ready=(w,f)=>{
			const d=w.document;
			if(d.readyState!=='complete'){
				const g=o=>{
					w.removeEventListener('load',g);
					f(o.target)
				};
				w.addEventListener('load',g)
			}else{
				f(d)
			}
		};
		//
		ready(w,d1=>{
			const frag=d1.createDocumentFragment(),
			walkDom=(branch,depth,nth,e)=>{
				if(0!==e.offsetHeight){
					switch(e.nodeType){
						case 3:
							branch.appendChild(d1.createTextNode(e.nodeValue));//todo:skip blank
							break
						case 1:
							branch=branch.appendChild(d1.createElement(e.tagName));
							break
					};
					//console.log('\t'.repeat(depth),nth,e.tagName||e.nodeValue);
					if((e=e.firstChild) && 1===e.nodeType){
						++depth
					};
					while(null!==e){
						walkDom(branch,depth,nth,e);
						if(null!==(e=e.nextSibling) && 1===e.nodeType){
							++nth
						}
					}
				}
			};
			//
			walkDom(frag,0,1,d1.body);
			//
			ready(d1.defaultView.open(),d2=>{
				d2.title=d1.title;
				d2.documentElement.firstElementChild.replaceWith(frag.firstElementChild);
			})
		})
	})(window);
