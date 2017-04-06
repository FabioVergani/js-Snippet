let e=Function.prototype;
const callable=e.bind.bind(e.call),
toString=callable(Object.prototype.toString),
isObject=function(e){return toString(e)==='[object Object]'},
hasOwnProperty=callable(Object.prototype.hasOwnProperty);

//console.log();
