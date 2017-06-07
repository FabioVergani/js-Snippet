 function addClass(a,b){
	function f(x){a.setAttribute('class',x)}
	const s=a.getAttribute('class');
	if(s){if(s.includes(b)!==true){f(s+'\u0020'+b)}}else{f(b)}
 }

 function removeClass(a,b){
	const s=a.getAttribute('class');
	if(s.includes(b)){a.setAttribute('class',s.split(/\s+/).filter(function(a){return a!==b}).join('\u0020'))}
 }
