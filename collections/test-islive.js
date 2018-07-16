function isLive(m) {
  const a = m.length;
  if (a) {
	  const body=document.body, e = m.item(0).cloneNode();
	  body.appendChild(e);
	  const c = m.length;
	  body.removeChild(e);
	  return c !== a;
	}

}

console.log("isLive(document.links)",isLive(document.links)); //true
