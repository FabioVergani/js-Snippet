const d=document;
//
const g=d.createElement('canvas').getContext('experimental-webgl');
//
d.open();
j=0;
for(i in g){//orderin NOT uaranteed
	//d.writeln((i[0]+i[6])+' | '+(i[9]?[0,6]:[0,7,8]).map(n=>i[n]||'').join('')+': '+i)
	d.writeln(
	i[0]+(i[9]?i[6]:i[7]+i[8])+' :'+i
	)
};
d.close();
//
/*
vA | vA: vertexAttribPointer
eV | eV: enableVertexAttribArray
cB | cB: createBuffer
bD | bD: bufferData
cP | cP: createProgram
sS | sS: shaderSource
cS | cS: createShader
ce | ce: compileShader
aS | aS: attachShader
lo | lo: linkProgram
ug | ug: useProgram
um | u1f: uniform1f
um | u2f: uniform2f
um | u4f: uniform4f
*/



