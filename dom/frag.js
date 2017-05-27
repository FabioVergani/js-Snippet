	function frag(a,b,c,d,e){//tag,id,class,text,html
		var f=wd,y=f.createDocumentFragment().appendChild(f.createElement(a));
		if(b){g.id=b};
		if(c){g.className=c};
		if(d){g.appendChild(f.createTextNode(d))}else if(e){g.innerHTML=e};
		return g;
	}
