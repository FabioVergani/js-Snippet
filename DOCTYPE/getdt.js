function dtOf(x){
 function f(a,b){return a?s+b+'"'+a+'"':''}
 const t=x.doctype,s='\u0020';
 return ['<!DOCTYPE',s,t.name,f(t.publicId,'PUBLIC'+s),f(t.systemId,''),'>'].join('');
}
//console.info(dtOf(document))
