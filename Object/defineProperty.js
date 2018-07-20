function RaiseErrorType(x){throw new TypeError(x)}
function isFunction(x){return typeof(x)=== 'function'}
function isObject(x){return x!==null && (typeof(x)==='object'||x instanceof Object)}
function has(o,p){var e;return {value:p in o && (e=o[p]),refer:e,valueOf:function(){return this.value}}}

Object.prototype.hasOwnProperty||(Object.prototype.hasOwnProperty=function(x){
 var o,e=this,p=String(x);
 return p in e && (o=e.__proto__||e.constructor.prototype,!(p in o)||e[p]!== o[p])
});


//#===============================================================
Object.defineProperty=Object.defineProperty||(function(O){

	var m,n,Err=RaiseErrorType,defineAccessor=O.prototype.hasOwnProperty('__defineGetter__');
	if(defineAccessor){
		m=['Getter','Setter'];
		n=[O.__defineGetter__,O.__defineSetter__];
		defineAccessor=function(o,i,p,x){isFunction(x)?n[i].call(o,p,x):Err(m[i]+' must be a function')}
	};


	return function(a,b,c){//object,property,descriptor
		var e=Err,f=isObject,g,s,i;
		if(f(a)){
			if(f(c)){
				f=has;
				g=f(c,'get');
				s=f(c,'set');
				i=String(b);
				if(g||s){
					if('value' in c||'writable' in c){
						e('A property cannot both have accessors and be writable or have a value')
					}else{
						f=defineAccessor;
						if(f!==false){
							f(a,0,i,g.refer);
							f(a,1,i,s.refer)
						}else{
							e('Accessors cannot be defined on this javascript engine')
						}
					}
				}else{
					a[i]=c.value
				}
			}else{
				e('Property description must be an object')
			}
		}else{
			e('Object.defineProperty called on non-object')
		}
	}

})(Object);


//Object.defineProperty({},'a',{value:1})
