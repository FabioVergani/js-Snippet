/*
js perf https://jsperf.com/isnan-vs-typeof-number
typeof(x)==='number'
isNaN(x)
+x===x
+(-1)===-1//true
+(-Infinity)===-Infinity//true
*/
isFiniteNumber||(isFiniteNumber=function(x){
return +x===x  && x!==Infinity && x!==-Infinity
});
