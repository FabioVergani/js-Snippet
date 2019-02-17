for(let i=a.length;0!==i;console.log(;a[--i]));


function fn(x){return x<5}
for(let m=[1,2,3,4,5,6,7,8],i=m.length;0!==i;(--i,console.log(i,m[i]+'<5',fn(m[i]))));


function fn(x){
  console.log(x+'<5',x<5)
  return x<5
}

for(let m=[1,2,3,4,5,6,7,8],i=m.length;0!==i;i=fn(m[--i])?0:i);

