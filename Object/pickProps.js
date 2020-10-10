const pick=(a,b)=>b.reduce((e,i)=>(e[i]=a[i],e),{});

/*
sample:
box=pick(elem.getBoundingClientRect(),['width','height','top','left']);

filterES6 sample alternative
const box =(({width,height,top,left})=>({width,height,top,left}))(elem.getBoundingClientRect());
*/
