function dtOf(x){
 function f(a,b){return a?b+'\u0020"'+a+'"':''}
 const t=x.doctype;
 return '<!DOCTYPE\u0020'+t.name+f(t.publicId,'\u0020PUBLIC')+f(t.systemId,'')+'>';
}
//console.info(dtOf(document))
