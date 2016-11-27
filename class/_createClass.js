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
	 let v=(o[p='value']=e[p])!==undefined;
	 o[p='writable']=v=v?p in e?e[p]:true:true;
	 o[p='enumerable']=p in e?e[p]:true;
	 o[p='configurable']=p in e?e[p]:v;
	};
   }; 
   O.defineProperties(t,d);
  };
 };
 return x;
}
//
function createClass(a){//props
 const o=define(rawObj(),a);
 return o.flag?o.target:null
} 

//-------------------------------------

var laMiaClasse=createClass({
	pippo:{value:function(){
		console.info(this);
		alert(++this.counter);
	}},
	pluto:{value:2}
});
//

var istanza1DellaMiaClasse=O.create(laMiaClasse);
istanza1DellaMiaClasse.counter=1;
var istanza2DellaMiaClasse=O.create(laMiaClasse);
istanza2DellaMiaClasse.counter=2;

istanza1DellaMiaClasse.pippo();//2
istanza2DellaMiaClasse.pippo();

istanza1DellaMiaClasse.pippo();//3
istanza2DellaMiaClasse.pippo();


istanza1DellaMiaClasse.pippo=function(){alert('kk');}
istanza1DellaMiaClasse.pippo();
istanza2DellaMiaClasse.pippo();

