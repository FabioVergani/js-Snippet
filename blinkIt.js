	//#blinkIt(selector,times,delay)
	function blinkIt(a,b,c){
		setTimeout(function(){
			var e=query(a), x=e.style, i=1, l=b*2, g=creaIntervallo(function(){
				var s,o=x,v='visible';if(i<l){s=o.visibility!==v?v:'hidden';++i}else{eliminaIntervallo(g)};o.visibility=s
			},7E2)
		},c||1E3);
	}