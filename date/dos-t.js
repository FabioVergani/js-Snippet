const o=new Date();
let t=(((o.getUTCHours()<<6)|o.getUTCMinutes())<<5)|o.getUTCSeconds()/2;
console.info('dosTime',t);
