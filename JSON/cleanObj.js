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
