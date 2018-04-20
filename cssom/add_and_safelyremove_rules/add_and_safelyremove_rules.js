(w =>{
	const d=w.document;
  
	//..
	const undo=w.undo=(a=>{
		const r='body{background:rgb(238,238,238)}';
		let l=a.length;
		if(l){//console.info('styles:%o',a);
			s=a[--l];//console.info('style:%o',s);
			const m=s.cssRules,
			i=s.insertRule(r,m.length),
			p=new RegExp('body\\s*{\\s*background\\s*:\\s*rgb\\(\\s*238\\s*,\\s*238\\s*,\\s*238\\s*\\);\\s*}','i');//console.info('cssRules:%o',m,'i:',i);
			l=()=>{
				const x=m[i];
				if(x && p.test(x.cssText)){
					s.deleteRule(i);
				}else{
					for(let i=0,l=m.length;i<l;++i){//console.log(m[i].cssText,p,p.test(m[i].cssText));
						if(p.test(m[i].cssText)){
							s.deleteRule(i);
						};
					};
				};
			};
		}else{//console.warn('no styles!');
			const x=d.createDocumentFragment().appendChild(d.createElement('style'));
			x.appendChild(d.createTextNode(r));
			d.head.appendChild(x);
			l=()=>{x.parentNode.removeChild(x)};
		};
		return l;
	})(d.styleSheets);
	//..
  
})(window);
