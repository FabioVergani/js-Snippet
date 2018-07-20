function has(o,p){
	var e,x=p in o && (e=o[p]);
	return {value:x,valueOf:function(){return this.value},refer:e};
}

console.log(has({a:1},'a')?true:false)//true
console.log(has({a:1},'a').refer)//1
