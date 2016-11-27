console.clear();
//
const O=Object,rawObj=O.create.bind(null,null);
O.defineProperty(rawObj,'O',{value:Object});
//
function define(a,b){//obj,keys
 const t=a||null,r=rawObj,x=r();
 if(x.target=t){
  const q=b,O=r.O,k=O.keys(q);
  let i=k.length;
  if(x.flag=i>0){
   const d=r();
   while(i>0){
	const o=r();
	let p=k[--i],e=q[p];
	d[p]=o;
	if(e){
	 o[p='value']=e[p];
	 o[p='writable']=p in e?e[p]:true;
	 o[p='enumerable']=p in e?e[p]:true;
	 o[p='configurable']=p in e?e[p]:true;
	};
   }; 
   O.defineProperties(t,d);
  };
 };
 return x;
}
//-------------------------------------
let r;
//#1
r=define('');
console.dir(r);
//#2
r=define({},'');
console.dir(r);
//#3
r=define({},{
  a:{},b:{}
});
console.dir(r);
//#4
r=define({},{
  a:{},b:null
});
//#5
r=define({},{
  a:{},b:{}
});
console.dir(r);
//#6
r=define({},{
  a: {
    value: true,
  },
  b: {
    value: "Hello",
    writable: false
  }
});
console.dir(r);
