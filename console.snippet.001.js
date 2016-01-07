'use strict';
(function($window){
 function Capitalized(x){var s=x;return s.charAt(0).toUpperCase()+s.slice(1);}

 var w=$window, $console=w.console;

 ['dir','info','log','group','groupEnd','groupCollapsed','clear'].forEach(function(x){
	var p=x,o=$console;
	w[p.length===3?p:'log'+Capitalized(p)]=function(){
	 o[p].apply(o,arguments);
	};
 });

})(window);
/*
dir({});
log(1);
logGroup(2);
log(21);
logGroupEnd();
logGroupCollapsed(3);
log(31);
logGroupEnd();
logInfo();
*/

(function($window){

 var w=$window,
 Call=w.Function.call,
 Slice=Call.bind(w.Array.prototype.slice),
 $document=w.document,
 end;


})(window);
