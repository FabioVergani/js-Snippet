(p=>{
	Object.defineProperties(p,{
		eventListenerList:{value:new Map()},
		_addEventListener:{value:p.addEventListener},
		_removeEventListener:{value:p.removeEventListener}
	});
	p.addEventListener=function(a,b,c=false){//eventType,eventHandler,useCapture
		const e=this,m=e.eventListenerList,s=m.get(a);
		if(s){s.add(b)}else{m.set(a,new Set([b]))};
		e._addEventListener(a,b,c)
	};
	p.removeEventListener=function(a,b,c=false){//eventType,eventHandler,useCapture
		const e=this,m=e.eventListenerList;
		if(m.has(a)){
			const s=m.get(a);
			s.delete(b);
			if(0===s.size){m.delete(a)}
		};
		e._removeEventListener(a,b,c)
	}
})(xxx.prototype);
