function getCommonAncestor(a,b){
 const m=[],N=Node;
 var n=a,i=b;
 if(n instanceof N && i instanceof N){
  while(n=n.parentNode){m[i=m.length]=n;};
  if(i){n=b;while(n=n.parentNode){if(m.includes(n)){return n;};};	};
 };
 return null;
}

/*
console.dir(getCommonAncestor(document.body.children[21],document.body.children[2]));
console.dir(getCommonAncestor(document.body.children[1],document.body.children[22]));
console.dir(getCommonAncestor(document.body.children[1],document.body.children[2]));
*/




function getCommonAncestorForNode(a,b){
 const m=[];
 var n=a;	
 while(n=n.parentNode){m[m.length]=n;};
 if(m.length){
  n=b;
  while(n=n.parentNode){if(m.includes(n)){return n;};}; 
 };
 return null;
}

/*
console.dir(getCommonAncestor(document.body,document.body.children[1]));
*/

