(function(startdate){

	function beforeOneWeek(fromdate){
		var o = new Date(fromdate.getTime() - 604800000) , day=o.getDay(), diffToMonday=o.getDate() - day + (day === 0 ? -6 : 1);//60 * 60 * 24 * 7 * 1000
		return new Date(o.setDate(diffToMonday));//lastMonday
	}

	var d=document, fragment=d.createDocumentFragment();

	for(var s,i=0, t=new Date(startdate), dom=fragment,f=beforeOneWeek; t.getFullYear() !==2016; ++i){
		s=f(t).toISOString().slice(0,10);
		p = document.createElement('p');
		p.innerHTML='<a target="_self" href="'+s+'">'+s+'</a>';//yyyy-mm-dd
		dom.appendChild(p);
		t=new Date(s);
	};

	d.body.appendChild(fragment);
})(new Date());
