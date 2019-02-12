var $='WHAK',w=document,h='getElementById',a="javascript",k="value",o="packer";
w.writeln('<h4><a href="http://www.'+$+'.ca">JavaScript Source Code To Code Points Packer</a></h4>\
<textarea id=javascript rows=6 cols=77 onmouseover=this.select()>alert("www.'+$+'.com");<\/textarea>\
<br><textarea id=packer rows=6 cols=77 onmouseover=this.select()><\/textarea><br>\
<input value="Pack" type=button onclick="w[h](o)[k]=Pack_JS_2_Codepoints(w[h](a)[k]);"> \
<input value="Test" type=button onclick="eval(w[h](o)[k]);">');
function Pack_JS_2_Codepoints(W,H,A,K){K=W.replace(/./g,function(H){
return","+H.charCodeAt(0)});A="eval(String.fromCharCode("+K.replace(",","")+"));";return A}
w[h](o)[k]=Pack_JS_2_Codepoints(w[h](a)[k]);
//Try it on http://www.whak.ca/demo/codepoints-javascript-packer.htm
