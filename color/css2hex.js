let rgb2hex=(function(){

 function f(x){return('0'+parseInt(x).toString(16)).slice(-2)}
 
 function r(s,r,g,b){
	var s=f(b);
	const m=['#',f(r),f(g),s],i=s[1];
	if(i===s[0]){s=m[2];const e=s[1];if(e===s[0]){s=m[1];s=s[1];if(s===s[0]){m[1]=s;m[2]=e;m[3]=i}}};
	return m.join('');
 }

 const a=/rgb\(255,\s*255,\s*255\s*\)/g,b=/rgb\(0,\s*0,\s*0\s*\)/g,c=/rgb\((\d+),\s*(\d+),\s*(\d+)\s*\)/g;
 return function(s){return s.replace(a,'#fff').replace(b,'#000').replace(c,r)}
})();
//
console.log(rgb2hex('rgb(0, 0, 0) , rgb(255, 255, 255) ,rgb(0,82,0) '));
