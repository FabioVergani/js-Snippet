(function($w){
 'use strict';
 function dummy(){}
 function capitalize(t){var s=t;return s.charAt(0).toUpperCase()+s.slice(1);}

 var w=(function($){
  var o=$,p='console',e=o[p],k=capitalize,g=dummy,
  f=e?function(o,s,t){var c=e,x=c[s];o[t]=function(){x.apply(c,arguments);};}:(e=o[p]={},function(o,s,t){o[t]=g;});
  p='log';f(o,p,p);p='dir';f(o,p,p);p='group';[p,p+'End',p+'Collapsed','info','clear'].forEach(function(s){f(o,s,'log'+k(s));});
  o.inspect=function(o,s){var c=e,i=c.dir;if(s!=''){c.group(s);i(o);c.groupEnd();}else{i(o);};};
  return o;
 })($w);


})(window);
