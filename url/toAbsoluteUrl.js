
const toAbsoluteUrl=function(a){
 return function(x){a.href=x;return a.href}
}(document.createDocumentFragment().appendChild(document.createElement('a')));
//console.log(toAbsoluteUrl('ssss'))
