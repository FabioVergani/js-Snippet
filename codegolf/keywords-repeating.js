Let's say you have this code :

a=function(){/*code here*/}; 
b=function(){/*code here*/};
c=function(){/*code here*/};
/*...*/
z=function(){/*code here*/};

This code has many "function" keywords repeating. What if you could replace them with a single(unused) character and then evaluate the code?
Here's how I would do it :

eval('a=F(){/*codehere*/};b=F(){/*codehere*/};c=F(){/*codehere*/};/*...*/z=F(){/*codehere*/};'.replace(/function/g,'F'));


//

var a = "eval(''.replace(/function/g,'F'))".length,
    b = ('function'.length-'F'.length)*4;
alert("you should" + (a<b?"":" NOT") + " use this technique!");
