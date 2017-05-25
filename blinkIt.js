	function blinkIt(a,b,c,d){
	 setTimeout(function(){
		function swap(x,y){var e=o;e.remove(x);e.add(y);return e}
		var o=a.classList,i=1,l=b*2,k,s='blinking',g=(o.add(s),creaIntervallo(function(){
			var f=swap,x='blink-1',y='blink-0';if(++i>l){eliminaIntervallo(g);f(s,'blinked').remove(y);if(f=d){f(a)}}else{if(k=!k){f(x,y)}else{f(y,x)}}
		},7E2))},c)
	}

