var e;
//
const w=window,
aBindedCall=(e=w.Function.prototype).bind.bind(e.call),
O=w.Object,Create=O.create,
aRawObj=aBindedCall(Create,null,null);
//----------------------------------------------
var counter=-1;
var myClass=function(){
  var counter=666;
  return aRawObj({
  property1:{value:true,writable:true},
  property2:{value:"Hello"},
  method1:{value:function(){console.log(this.property1);console.log(++counter);}} 
 });
}();
//-
console.dir(myClass);


var istanza1=Create(myClass);console.dir(istanza1);
istanza1.counter=1;
istanza1.method1();

//-
var istanza2=Create(myClass);console.dir(istanza2);
istanza2.counter=2;
istanza2.method1();
