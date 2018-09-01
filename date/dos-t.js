const o=new Date();
let t=(((o.getUTCHours()<<6)|o.getUTCMinutes())<<5)|o.getUTCSeconds()/2;
console.info('dosTime',t);
t=((((o.getUTCFullYear()-1980)<<4)|(o.getUTCMonth()+1))<<5)|o.getUTCDate();
console.info('dosDate',t);
