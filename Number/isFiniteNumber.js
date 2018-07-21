/*
js perf https://jsperf.com/isnan-vs-typeof-number
typeof(x)==='number'
isNaN(x)
+x===x
+(-1)===-1//true
+(-Infinity)===-Infinity//true
*/

//isFiniteNumber=function(x){return x!==undefined && +x===x  && x!==Infinity && x!==-Infinity});
//isFiniteNumber=x=>x!==undefined && +x===x  && x!==Infinity && x!==-Infinity;

const val=x=>x!==undefined && x!==null;
//
const isFiniteNumber=x=>{
	let i=false;
	try{i=val(x) && +x===x && x!==Infinity && x!==-Infinity}finally{return i}
};

console.log(isFiniteNumber(1));
console.log(isFiniteNumber(Object.create(null)));


