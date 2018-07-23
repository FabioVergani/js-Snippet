(function(w){
	var d=w.document,e=false,f=w.Function;
	d.head||(d.head=d.getElementsByTagName('head')[0]);
	try{
		new f('(a=0)=>a');
		e=true
	}finally{
		if(e){
			const e=d.createDocumentFragment().appendChild(d.createElement('script'));
			f=d.getElementById('init').getAttribute("src");
			e.src=f.substring(0,f.lastIndexOf('/'))+'/get/page-es6.js';
			d.head.appendChild(e);
		}else{
			//alert("!ES6")
		};
	};
})(window);
