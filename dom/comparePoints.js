function getNodeIndex(a){var i=0,n=a;while(n=n.previousSibling){++i;};return i;}
function getClosestAncestorForNodes(a,b){const x=b;var e=a;while(e){if(e.isSameNode(x)){return e;}else{e=e.parentNode;};};return null;}
function getCommonAncestorForNodes(a,b){const m=[];var n=a;while(n=n.parentNode){m[m.length]=n;};if(m.length){n=b;while(n=n.parentNode){if(m.includes(n)){return n;};};};return null;}

//
function comparePoints(node1,offset1,node1,offset2) {
 const a=node1,A=offset1,b=node1,B=offset2;
 if(a.isSameNode(b)){
  return A===B?0:A<B?-1:1;
 }else{
  const g=getClosestAncestorForNodes;
  let c,f=getNodeIndex;
  if(c=g(b,a)){//c (container B or an ancestor) is a child node of A
	return A<=f(c)?-1:1;
  }else{
   if(c=g(a,b)){//c (container A or an ancestor) is a child node of B
	return B>f(c)?1:-1; 
   }else{//a!==b
    if(c=getCommonAncestorForNodes(a,b)){//containers are siblings or descendants of siblings
     let e=c;
	 const x=a.isSameNode(c)?g(b,e):(e=g(a,c),b.isSameNode(c)?c:g(b,c));
	 if(e.isSameNode(x)){
		throw 'same nodes!';
	 }else{
	  f=c.firstChild;
	  while(f){if(f.isSameNode(e)){return -1;}else if(f.isSameNode(x)){return 1;};f=f.nextSibling;};
	 };
	}else{
	 throw 'nodes have no common ancestor';
	};
   };  
  }; 
 };
}
