Number.isInteger||(Number.isInteger=function(x){return typeof(x)==='number' && isFinite(x) && Math.floor(x)===x});

console.clear();
[
0,//true
1,//true
-100000,//true
1e+23,//true
0.1,
3.14,
'10',
Math.PI,
NaN,
Infinity,
-Infinity,
true,
false,
[],
[1],
[2,3,4],
{},
{a:1},
Number
].forEach(x=>console.log(x,Number.isInteger(x)));
