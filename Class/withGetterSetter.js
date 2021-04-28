/*
class Form{
  set foo(val){
    console.log("setting foo")
    this.fooValue = val;
  }
  
  get foo(){
     console.log("getting foo");
     return this.fooValue;
  }
}

let frm = new Form();
frm.foo = "bar";
console.log(frm.foo);
*/

var form = {
  a: "aValue",
  b: "bValue"
}

function withGetterSetter(obj){
   var keys = Object.keys(obj);
   var result = {};
   
   for(var i=0;i<keys.length;i++){
       var key = keys[i];
       result[key+"_internal"] = obj[key];
       (function(k){
         Object.defineProperty(result,k, {
          get:function() {
            console.log("getting property:",k);
            return this[k + "_internal"];
          }, 
          set: function(x) { 
            console.log("setting property:",k);
            this[k + "_internal"] = x 
          }
         });
       })(key)
   }
   return result;
}

var setterObj = withGetterSetter(form);
console.log(setterObj.a);
setterObj.a = "updated";
console.log(setterObj.a);
