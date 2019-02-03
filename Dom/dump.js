	(w1=>{
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
		},
		matrix=[];
		//
		ready(w1,d1=>{
			if(d1.body){
				const w1=d1.defaultView,
				frag=d1.createDocumentFragment(),
				walk=(branch,depth,nth,e)=>{
					if(0!==e.offsetHeight){
						switch(e.nodeType){
							case 3:
								branch.appendChild(d1.createTextNode(e.nodeValue));//todo:skip blank
								break
							case 1:
								branch=branch.appendChild(d1.createElement(e.tagName));
								const m=matrix;
								m[m.length]=[[e,w1.getComputedStyle(e)],[branch,null]];
								break
						};
						//console.log('\t'.repeat(depth),nth,e.tagName||e.nodeValue);
						if((e=e.firstChild) && 1===e.nodeType){
							++depth
						};
						while(null!==e){
							walk(branch,depth,nth,e);
							if(null!==(e=e.nextSibling) && 1===e.nodeType){
								++nth
							}
						}
					}
				};
				//
				walk(frag,0,1,d1.documentElement);
				//
				console.dir(matrix);
				//
				ready(w1.open(),d2=>{
					let x=d1,t=x.doctype;
					x=t?t.cloneNode():d2.implementation.createDocumentType('html',null,null);
					if(t=d2.doctype){
						d2.replaceChild(t,x)
					}else{
						d2.insertBefore(x,d2.childNodes[0])
					};
					if(x=frag.firstElementChild){
						d2.documentElement.replaceWith(x)
					}
				})
			}
		})
	})(window);
