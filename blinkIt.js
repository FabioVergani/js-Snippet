	function blinkIt(a,b,c){
	 setTimeout(function(){
		function swap(x,y){var c=o;c.remove(x);c.add(y);return c}
		var o=a.classList,i=1,l=b*2,k,z='blinking',g=(o.add(z),creaIntervallo(function(){
			var f=swap,a='blink-1',b='blink-0';if(++i>l){eliminaIntervallo(g);f(z,'blinked').remove(b)}else{if(k=!k){f(a,b)}else{f(b,a)}}
		},7E2))},c)
	}
