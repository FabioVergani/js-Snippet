var e;
//
const w=window,
aBindedCall=(e=w.Function.prototype).bind.bind(e.call),
O=w.Object,Create=O.create,
aRawObj=aBindedCall(Create,null,null);
//----------------------------------------------
var myClass=aRawObj({
  property1:{value:true,writable:true},
  property2:{value:"Hello"}
});
//
var istanza1=Create(myClass);
istanza1.counter=1;
var istanza2=Create(myClass);
istanza2.counter=2;

console.dir(istanza1);
console.dir(istanza2);
