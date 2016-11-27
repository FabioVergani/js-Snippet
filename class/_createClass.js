function defineProperties(o,p){// dest, props
 const m=p;
 var i=m.length;
 if(i>0){
  const f=Object.defineProperty;
  let e;
  while(i>0){
	e=m[--i];
	e.configurable=true;
	e.enumerable=(e.enumerable||false);
	if('value' in e){e.writable=true;};
	f(o,e.key,e);
  };
 };
}


function _createClass(a,b,c){// Constructor, protoProps, staticProps
 const f=defineProperties;
 if(b){f(a.prototype,b);};
 if(c){f(a,c);}
 return a;
}
