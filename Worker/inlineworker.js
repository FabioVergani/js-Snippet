//Create web workers without a separate worker JS files

function worker() {
  setInterval(function() {
    postMessage({foo: "bar"});
  }, 1000);
}

var code = worker.toString();
code = code.substring(code.indexOf("{")+1, code.lastIndexOf("}"));

var blob = new Blob([code], {type: "application/javascript"});
var worker = new Worker(URL.createObjectURL(blob));

worker.onmessage = function(m) {
  console.log("msg", m);
};
