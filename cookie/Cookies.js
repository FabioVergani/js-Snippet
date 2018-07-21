//FabioVergani/js-Snippet
/*
#Cookies

 setCookie

	arguments note:
		v(alue): saved will be URI encoded (commas, semicolons, whitespace, '+' ...)
		p(ath): must be absolute (RFC 6265).
		e(xpires)=date-in-GMTString-format
		h(ost): if not specified eq host portion of the current document location. subdomains are always included by domain.
		s(ecure): cookie to only be transmitted over secure protocol as https

	esample:
		setCookie('x',123) ->x=123;expires=Mon, 22 Jul 2019 13:35:33 GMT;path=/;domain=
		setCookie('y','123; 66');//scade tra un anno

 getCookie

	result note:
		nohost->false,
		nocookies->'',
		nomatches->null,
		fail->0

*/

(w=>{
	const Host=w.location.host,
	decodeURI=w.decodeURIComponent,
	encodeURI=w.encodeURIComponent,
	d=w.document,
	val=w.val||(w.val=x=>x!==undefined && x!==null),
	isFiniteNumber=w.isFiniteNumber||(w.isFiniteNumber=x=>{let i=x===0;try{i=i?i:val(x) && +x===x && x!==Infinity && x!==-Infinity}finally{return i}}),
	toPositiveInteger=w.toPositiveInteger||(w.toPositiveInteger=(x,y=0)=>isFiniteNumber(x)?x<=0?y:parseInt(x)+y:y),
	nextDayDate=w.nextDayDate||(w.nextDayDate=x=>{const o=new Date();o.setDate(o.getDate()+toPositiveInteger(x,1));return o}),
	getCookie=w.getCookie||(w.getCookie=(n)=>{//name
		let s=Host;
		if(s!==''){s=d.cookie;if(s!==''){s=s.match('(?:^|;)(?:\\s*'+n+'=)([^;]+)');if(s!==null){s=decodeURI(s[1])}}}else{s=false};
		return s
	}),
	setCookie=w.setCookie||(w.setCookie=(n,v,e=365,p='/',h=Host,s)=>{//name, value, expireNdaysfromtoday, path, host, secure
		if(h!==''){
			let t=encodeURI;
			v=t(v);
			t=t(n)+'='+v+';expires='+nextDayDate(e).toUTCString()+';path='+p+';domain='+h;
			if(s===true){t+=';secure'};
			d.cookie=t+';'
			return getCookie(n)===v||0
		}else{
			return false
		}
	}),
	optInCookie=w.optInCookie||(w.optInCookie=(n,v,a,c)=>{//name, value-control, ask2confirm, confirmed
		let s=getCookie(n);
		if(s){c(n,s)}else if(s===null && (s=a(n))){s=setCookie(n,v)};
		return s;
	});
	//..
})(window);
//=============================================================================










	let result=optInCookie(
		'UECL',
		1,
		n=>{//cookie_name
			console.info('ask to confirm cookie: '+n);
			return confirm('accetti il cookie ?');
		},
		n=>{//cookie_name
			console.info('cookie: '+n+' nas been confirmed.');
		}
	);
	//
	console.info('result:',result);











