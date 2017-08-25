let rgb2hex=(function(){
 function f(x){return('0'+parseInt(x).toString(16)).slice(-2)}
 function r(x,r,g,b){var s=f(b);const m=['#',f(r),f(g),s],i=s[1];if(i===s[0]){s=m[2];const e=s[1];if(e===s[0]){s=m[1];s=s[1];if(s===s[0]){m[1]=s;m[2]=e;m[3]=i}}};return m.join('')}
 const a=/rgb\(\s*0\s*,\s*0\s*,\s*0\s*\)/g,b=/rgb\(\s*255,\s*255\s*,\s*255\s*\)/g,c=/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0(\.0+)?\s*\)/g,d=/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/g;
 return function(s){return s.replace(a,'#000').replace(b,'#fff').replace(c,r).replace(d,r)}
})();
//
console.log(rgb2hex('rgb(0, 0, 0) , rgb(255, 255, 255) ,rgb(0,82,0) '));

/*

function rgb2hex(t){
	
 const rgx=/rgb\((\d+),\s*(\d+),\s*(\d+)\s*\)/g;
	
 var s=t;
 if(s.indexOf('rgba')!==-1){//rgba!  'transparent';?
 }else{
	if(s.indexOf('rgb')!==-1){//rgb!
		
		
	}else{
	}
 };
 return s;
}
//

*/
