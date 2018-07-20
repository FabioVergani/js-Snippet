function isObject(x){return x!==null && (typeof(x)==='object'||x instanceof Object)}

/*
[
Number,
null,
undefined,
'',
0,
false,
Function(),
new Function,
[]
].forEach(x=>console.log(x,isObject(x)))
*/
