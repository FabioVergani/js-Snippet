/*
js perf https://jsperf.com/isnan-vs-typeof-number
typeof(x)==='number'
isNaN(x)
+x===x
+(-1)===-1//true
+(-Infinity)===-Infinity//true
*/

const val=x=>x!==undefined  && x!==null;

const isFiniteNumber=x=>{
	let i=x===0;
	try{
		i=i?i:val(x) && +x===x && x!==Infinity && x!==-Infinity
	}finally{
		return i
	}
};



//test:
console.clear();
(n=>{//MaxSafeInteger
	[
		Math.PI,//3
		n,//9007199254740991
		n+1,//9007199254740992
		//0:
		-n,
		-n-1,
		-1E3,
		-2.1,
		-2,
		-1,
		-.9,
		-.6,
		-.5,
		-.4,
		-.1,
		0,
		Number(),
		.1,
		.4,
		.5,
		.6,
		.9,
		1,
		2,
		2.1,
		Number(666),
		1E3,
		//false:
		null,//nb; isFinite true isFiniteNumber:false
		undefined,
		'','\r','\n','\t',' ','   ',
		'x',' x ','  x  ',
		[],[''],['\r'],['\n'],['\t'],[' '],
		[' x '],
		{},{a:1},{a:1,b:2},
		Object,
		-Infinity,
		Infinity,
		Object.create(null),//nb; isFinite Cannot convert object to primitive value
	].forEach(x=>console.log(isFiniteNumber(x),'|',x));
})(Number.MAX_SAFE_INTEGER);
