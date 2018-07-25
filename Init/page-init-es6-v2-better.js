(function(w){
	var o=w.Element.prototype, p='remove', h=p in o, d=o[p];
	if(h!==true||!d){
		o[p]=function(){
			var e=this,x=e.parentNode;
			if(x!==null){
				x.removeChild(e)
			}
		}
	};
	h=(p='head') in (d=w.document);
	if(h=h?d[p]:(d[p]=d.getElementsByTagName(p)[0])){
		o=d.getElementById('init')
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
})(window);
