(function(w){
	var o=w.Element.prototype, p='remove', h=p in o, d=o[p], k='js-no';

	if(h!==true||!d){
		o[p]=function(){
			var e=this,x=e.parentNode;
			if(x!==null){
				x.removeChild(e)
			}
		}
	};
	h='js-init';
	if(o=(d=w.document).getElementById('page')){
		p='classList';
		if(p in o){
			o[p].replace(k,h)
		}else{
			o[p='className']=o[p].replace(k,h)
		};
		if(h=((p='head') in d)?d[p]:(d[p]=d.getElementsByTagName(p)[0])){
			o=d.getElementById('init');
			p=o.getAttribute('src');
			o.remove();
			p=p.substring(0,p.lastIndexOf('/'))+'/get/page';
			try{
				new w.Function('(a=0)=>a');
				p+='-es6'
			}finally{
				try{
					o=d.createElement('script');
					d.createDocumentFragment().appendChild(o)
				}finally{
					o.src=p+'-dev.js';//-dev
					h.appendChild(o)	
				}
			}
		}
	}else{
		p='documentElement';
		o=d[p]||(d[p]=d.getElementsByTagName('html')[0]);
		p=o.className.replace(k,h);
		o.className=p+' dom-unknown';
	};

})(window);
