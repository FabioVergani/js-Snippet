/*
js perf https://jsperf.com/isnan-vs-typeof-number
typeof(x)==='number'
isNaN(x)
+x===x
+(-1)===-1//true
+(-Infinity)===-Infinity//true
*/

//isFiniteNumber=function(x){return x!==undefined && +x===x  && x!==Infinity && x!==-Infinity});

const isFiniteNumber=x=>x!==undefined && +x===x  && x!==Infinity && x!==-Infinity;
isFiniteNumber(1);
