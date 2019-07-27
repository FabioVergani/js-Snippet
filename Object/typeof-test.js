//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
// two calls of the ! (logical NOT) operator are equivalent to Boolean()
var declaredButUndefinedVariable;
const tests={
	Booleans:[true,false,Boolean(1),!!(1)],//all:boolean
	Undefined:[undefined,declaredButUndefinedVariable],//all:undefined
	Numbers:[0,1,3.14,Math.LN2,Infinity,NaN,Number('1')],//all:number
	BigInt:[1n,BigInt('1'),BigInt(Number.MAX_SAFE_INTEGER)],//all:bigint
	Strings:['','bla\0020ubla',`template literal`,'0',String(1),Date()],//all:string
	//Symbols:[Symbol(),Symbol('foo'),Symbol.iterator],//all:symbol
	Null:[null],//all:
	Objects:[//all:
		{},{a: 1},
		[1, 2, 4],
		/regex/, new RegExp('\\w+'),
		new Date(),
		Math
	],
	Functions:[//all:
		Date,
		RegExp,
		new Function(),
		function(){},
		x=>{},
		class C {},
		Math.sin
	],
	Confusing:[//all:
		new Boolean(true),//true->object
		new Number(1),//1->object
		new String('abc'),//abc->object
		document.all//object HTMLAllCollection]->undefined
	]
};
//
for(const [key,val] of Object.entries(tests)){
	console.group(key);
	console.log.call(null,val.map(x=>x+'->'+typeof x).join('\n'));
	console.groupEnd();
}
