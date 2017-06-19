(function($){
var e=$.Function.prototype;
$.BindCall=e.bind.bind(e.call)
})(window);
//
(function($){
 var o=$.performance||{},$Date=$.Date;
 o.now=o.now||o.webkitNow||o.mozNow||o.msNow||$Date.now||function(){return new $Date().getTime()};
})(window);
//
(function($) {
 var p,s='AnimationFrame', r='Request'+s, t='request'+s, c='c'+t,k=!(t in $), g=k?BindCall($.performance.now):null;
 if(((p='moz')+r) in $ || ((p='webkit')+r) in $){
	if(k){
		$[t]=(function(a){
			return function(b){return a(function(){b(g())})}
		})($[p+'Request'+s]);
		t='ancel'+s;
		$[c]=$[p+'C'+t];
	}
 }else if(k){
  $[c]=function(a){clearTimeout(a)};
	$[t]=function(a){var j=g(), i=p(0,16-j-t), x=s(function(){a(j+i)},i);t=j+i;return x};
	p=$.Math.max;
	s=$.setTimeout;
	t=0;
 }
})(window);
