var d=window.document,b=d.body,e=d.createDocumentFragment().appendChild(d.createElement('textarea'));
e.innerHTML='xxxxxxxxxxxww';
b.appendChild(e).select();
d.execCommand('copy');
b.removeChild(e);
