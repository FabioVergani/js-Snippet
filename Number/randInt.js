const randInt=(a,b)=>{//Inclusive min,max
	const M=Math,f=M.floor,i=M.ceil(a);
	return f(M.random()*(f(b)-i+1))+ i
}


function randomInt(max,min=0){
    return (Math.random() * (max - min) + min) << 0 
}


/*
function randomInt(max,min=0){
    return (Math.random() * (max - min) + min) << 0 
}

const m=new Array(randomInt(100));
for(let i=0, l=m.length; i<l;i){
    m[i] = (Math.random() * ++i).toString(36).slice(-9);
}

console.log(m);

*/
