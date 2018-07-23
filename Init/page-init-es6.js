(function(w){
	var d=w.document,e=false;
	try{
		new w.Function('(a=0)=>a');
		e=true
	}finally{
		if(e){
			e=d.getElementById('init');
			const s=e.getAttribute("src");
			e.remove();
			e=d.createDocumentFragment().appendChild(d.createElement('script'));
			e.src=s.substring(0,s.lastIndexOf('/'))+'/get/page-es6.js';
			d.head.appendChild(e);
		}else{
			//alert("!ES6")
			//d.head||(d.head=d.getElementsByTagName('head')[0]);
		};
	};
})(window);
