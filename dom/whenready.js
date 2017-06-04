function whenready(a){
 function b(){f();d.removeEventListener(e,b)}
 const d=document,e='DOMContentLoaded',f=a;
 if(d.readyState!=='complete'){d.addEventListener(e,b)}else{f()}
}



(function(w){
 function a(x){console.dir(x.target)}
 function b(x){a(x);d.removeEventListener(e,b)}
 const d=w.document,e='DOMContentLoaded';
 if(d.readyState!=='complete'){d.addEventListener(e,b)}else{a({target:d})}
})(window);
