const cleanObj = (obj,omit) =>{
 const skip = void 0;
 return JSON.parse(JSON.stringify(obj,(key,value)=>omit.includes(key) ? skip :value))
};

console.log(cleanObj({a:1,b:2,c:3,d:{z:1}},['c','z']))

/*
{
 a:1,
 b:2,
 d:{}
}
*/

const cleanObjMin1 = (o,m) =>{
 const u = void 0, J=JSON;
 return J.parse(J.stringify(o,(k,v)=>m.includes(k) ? u :v))
};
//console.log(cleanObjMin1({a:1,b:2,c:3,d:{z:1}},['c','z']))

const cleanObjMin2 = (o,m)=>JSON.parse(JSON.stringify(o,(k,v)=>m.includes(k)?undefined:v));
//console.log(cleanObjMin2({a:1,b:2,c:3,d:{z:1}},['c','z']))
