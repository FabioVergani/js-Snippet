 function addClass(a,b){
	function f(x){a.setAttribute('class',x)}
	const s=a.getAttribute('class');
	if(s){if(s.includes(b)!==true){f(s+'\u0020'+b)}}else{f(b)}
}
