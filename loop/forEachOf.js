const eachOf=(m,f)=>{let i=m.length;if(i!==0){const a=Array(i);i=-1;for(const x of m){a[++i]=f(x)};if(i<1){a.length=0};i=a}else{i=null};return i};
