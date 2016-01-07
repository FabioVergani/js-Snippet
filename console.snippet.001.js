//
'use strict';
(function($window){
 function Capitalized(x){var s=x;return s.charAt(0).toUpperCase()+s.slice(1);}

 var w=$window, $console=w.console;

 ['log','group','groupEnd','groupCollapsed','clear'].forEach(function(x){
	var p=x,o=$console,k='log';
	w[p===k?k:k+Capitalized(p)]=function(){
	 o[p].apply(o,arguments);
	};
 });


})(window);
//

log(1);

logGroup(2);
log(21);
logGroupEnd();

logGroupCollapsed(3);
log(31);
logGroupEnd();
