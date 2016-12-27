'use strict';
var e;
//
const w=window,
O=w.Object,
Create=O.create,
aBindedCall=(e=w.Function.prototype).bind.bind(e.call),
aRawObj=aBindedCall(Create,(e=null),e);
//----------------------------------------------
const myClass=aRawObj({

  property1:{
	value:true,
	writable:true
 },

  property2:{
	value:'Hello'
  },

  method1:{
	value:function(){
	  console.log(this.property1,++this.counter);
	}
  },

  zz:(function(){
	let v;
	return{
		set:function(x){v=x;},
		get:function(){return v;}
	};
  })(),






//,...

});





//-
var istanza1=Create(myClass);
console.log(istanza1.zz);
istanza1.zz=5;
console.log(istanza1.zz+1);
console.dir(istanza1);

var istanza2=Create(myClass);
console.log(istanza2.zz);
istanza2.zz=10;
console.log(istanza2.zz+1);
console.dir(istanza2);
console.dir(istanza1);





//istanza.counter=1;
//istanza.method1();


