const f=s=>s.replace(/\w./g,x=>{
  const n=('0x'+x)/17+.5|0;
  console.log(x,n);
  return (n).toString(16)
});

/*
console.log(f('#FF0000')) // #F00
console.log(f('#00FF00')) // #0F0
console.log(f('#D913C4')) // #D1C
console.log(f('#C0DD39')) // #BD3
console.log(f('#28A086')) // #298
console.log(f('#C0CF6F')) // #BC7
*/
console.log(f('FF0000')) // F00
console.log(f('00FF00')) // 0F0
console.log(f('D913C4')) // D1C
console.log(f('C0DD39')) // BD3
console.log(f('28A086')) // 298
console.log(f('C0CF6F')) // BC7
