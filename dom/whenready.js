function whenready(a){
 function b(){f();d.removeEventListener(e,b)}
 const d=document,e='DOMContentLoaded',f=a;
 if(d.readyState!=='complete'){d.addEventListener(e,b)}else{f()}
}
