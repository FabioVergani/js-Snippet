//fabio

const Observer=new MutationObserver(function(m,o){o.disconnect();let i=m.length;while(i--){o.f(m[i],o)};o.observe(o.t,o.i);});

Observer.f=function(e,o){
	const s=e.type,t=e.target,v=e.oldValue;
	if(s!=='characterData'){
		if(s!=='attributes'){

		}else{
			const n=e.attributeName;
			if(t.getAttribute(n)!==v){t.setAttribute(n,v)}
		}
	}else{
		if(t.nodeType!==3){
			//
		}else{
			if(t.textContent!==v){t.textContent=v}
		}
	};
}

Observer.observe((Observer.t=dE),(Observer.i={
subtree:true,
childList:true,
attributes:true,
attributeOldValue:true,
characterData:true,characterDataOldValue:true}));
