<!DOCTYPE html>
<html>
<head>
    <title>test</title>
</head>
<body>
<pre id="output"></pre>
<script>
 

//
(function(w){
 function f(o){//handleConnection
  document.getElementById("output").innerHTML=("connessione:"+o.type);//+o.type
  console.dir(o);
 }
 var e=w.navigator;
 e=e.connection||e.mozConnection||e.webkitConnection;
 f(e);
 return e?(e.addEventListener('typechange',function(evt){f(evt.target);}),e):{type:'absent'};
})(window);
//

</script>
</body>
</html>
