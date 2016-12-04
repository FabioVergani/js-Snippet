function getClosestAncestorIn(A,B){//node,ancestor
 const b=B;
 var a=A;
 while(a){
  if(a.isSameNode(b)){
	return a;
  }else{
	a=a.parentNode;
  };
 };
 return null;
}
