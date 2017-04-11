var d=window.document;
d.querySelectorAll('h2.titolo-categoria').forEach(function(h2,i,titoli){
	var a, next=titoli[i+1], prev=titoli[i-1];
	if(next){
		a=d.createElement('a');
		a.innerText="\u25B6";
		a.className="next";
		a.href='#'+next.id;
		h2.appendChild(a);
	};
	if(prev){
		a=d.createElement('a');
		a.innerText="\u25C0";
		a.className="prev";
		a.href='#'+prev.id;
		h2.insertBefore(a,h2.firstChild);
	};
});
