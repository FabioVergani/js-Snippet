const d=document;
//
const myWebGLRenderingContext=d.createElement('canvas').getContext('experimental-webgl');
//
let i=0,m=[];
for(const p in myWebGLRenderingContext){//ordering NOT guaranteed
	const l=p.length;
	if(l>i){i=l};
	m[m.length]=p
};
//
const table=d.createDocumentFragment().appendChild(d.createElement('table'));
const tb=table.appendChild(d.createElement('tbody'));
const maxWordLen=i;
const letters=Array(i);
//const badcolums=[];
//
i=m.length;
while(i){
	const s=m[--i];
	const tr=tb.appendChild(d.createElement('tr'));
	for(let c,j=0;j<maxWordLen;++j){
		c=s[j];
		tr.appendChild(d.createElement('td')).textContent=c;
	};
};
//
table.style.fontFamily='monospace';
d.body.appendChild(table);



/*
	console.log(i,m[i]);

//console.dir(m);
//console.log('Words:%d, maxWordLen:%d',m.length,i);



console.log();
m=m.map(s=>{
	return 3
});
*/
//console.dir(myWebGLRenderingContext);
//console.log(p);

console.dir(m);


