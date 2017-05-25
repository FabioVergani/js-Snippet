	function frag(a,b,c,d,e){
		var y,x=wd;
		y=x.createDocumentFragment().appendChild(x.createElement(a));
		if(b){y.id=b};
		if(c){y.className=c};
		if(d){y.appendChild(x.createTextNode(d))};
		if(e){y.innerHTML=e};
		return y;
	}
