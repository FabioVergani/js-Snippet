function has(o,p){var e=p in o;return {value:e && (e=o[p]) && true,refer:e,valueOf:function(){return this.value}}}


console.log(has({a:1},'a')?true:false)//true
console.log(has({a:1},'a').refer)//1
