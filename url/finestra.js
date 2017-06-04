function finestra(w){
 const a=w.location, b=w.parent.location, c=a!==b, d=w.document;
 return {framed:c,url:c?d.referrer:d.location.href,toString:function(){return this.url}}
}

console.log(finestra(window).url)
console.log(finestra(window).framed)
