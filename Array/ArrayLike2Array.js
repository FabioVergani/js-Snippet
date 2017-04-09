function ArrayLike2Array(m){
 let i;
 const a=m, b=Array(i=a.length);
 --i;
 while(i>-1){b[i]=a[i];--i};
 return b;
}


/*
function ArrayLike2Array(m){let i;const a=m, b=Array(i=a.length);--i;while(i>-1){b[i]=a[i];--i};return b}
*/

/*
nota

// Using for..of
for(var entry of list.entries()) { 
  console.log(entry);
}
 
results in:

Array [ 0, ---]
Array [ 1,---- ]
Array [ 2, --- ]



*/
