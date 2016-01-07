'use strict';
(function($window){
 function dummy(){}
 function capitalize(x){var s=x;return s.charAt(0).toUpperCase()+s.slice(1);}


 var w=(function(w){
	var c=w.console, f=c===undefined?(c=w.console={},dummy):function(p){return function(){var o=c;o[p].apply(o,arguments);};};
	['dir','info','log','group','groupEnd','groupCollapsed','clear'].forEach(function(x){var s=x;w[s.length===3?s:'log'+capitalize(s)]=f(s);});
	return w;
 })($window);


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
