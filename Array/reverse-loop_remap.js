const m=[1,2,3];
let i=m.length;
//console.log(i);//3
while(0!==i){
	const v=m[--i];
	m[i]=v*v
};
console.dir(m);//[1, 4, 9]
