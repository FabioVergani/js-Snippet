Let's say you have this code :

a=function(){/*code here*/}; 
b=function(){/*code here*/};
c=function(){/*code here*/};
/*...*/
z=function(){/*code here*/};

This code has many "function" keywords repeating. What if you could replace them with a single(unused) character and then evaluate the code?
Here's how I would do it :

eval('a=F(){/*codehere*/};b=F(){/*codehere*/};c=F(){/*codehere*/};/*...*/z=F(){/*codehere*/};'.replace(/function/g,'F'));
