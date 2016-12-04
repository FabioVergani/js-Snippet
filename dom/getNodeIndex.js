function getNodeIndex(a){//node
 var i=0,n=a;
 while(n=n.previousSibling){++i;};
 return i;
}
