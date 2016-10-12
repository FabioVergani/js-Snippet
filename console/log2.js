(function(win){
 let p,i=2;//i=m.length;
 const $=win,c=$.console,f=(p=$.Function.prototype,p.call.bind(p.bind)),o=$.log=f(c.log,c),m=['dir','info'];
 while(i!==0){o[p=m[--i],{dir:'obj'}[p]||p]=f(c[p],c);};
})(window);
//
log(1);
log.obj(1);
log.info(1);
