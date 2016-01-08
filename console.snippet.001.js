'use strict';
(function($window){
 function dummy(){}
 function capitalize(t){var s=t;return s.charAt(0).toUpperCase()+s.slice(1);}

/*
 var w=(function(w){
	var c=w.console, f=c===undefined?(c=w.console={},dummy):function(p){return function(){var o=c;o[p].apply(o,arguments);};};
	['dir','info','log','group','groupEnd','groupCollapsed','clear'].forEach(function(x){var s=x;w[s.length===3?s:'log'+capitalize(s)]=f(s);});
	return w;
 })($window);
*/


 var w=(function($){
  var o=$,p='console',e=o[p],f=e?function(o,s,t){var c=e,x=c[s];o[t]=function(){x.apply(c,arguments);};}:(e=o[p]={},function(o,s,t){o[t]=dummy;});
  p='log';f(o,p,p);
  p='dir';f(o,p,p);
  p='group';[p,p+'End',p+'Collapsed','info','clear'].forEach(function(s){f(o,s,'log'+capitalize(s));});
  return o;
 })($win);


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
