const dom2List = root => {
  const 
    d = root.ownerDocument,
		e = (a,b) => a.appendChild(d.createElement(b)),
		f = (node, nest) => {
			const ul = e(nest, 'ul');
			ul.appendChild(d.createTextNode(node.nodeName));
			for (const child of node.children) {
				f(child, e(ul, 'li'));
			}
			return ul;
		};
	return f(root, d.createDocumentFragment());
};

//document.body.appendChild(dom2List(document.firstElementChild));

/*
const dom2List = (root, callback) => {
	const 
	        d = root.ownerDocument,
		e = (a, b) => a.appendChild(d.createElement(b)),
		f = (node, nest) => {
			const ul = e(nest, 'ul');
			callback(ul.appendChild(d.createTextNode(node.nodeName)));
			for (const child of node.children) {
				f(child, e(ul, 'li'));
			}
			return ul;
		};
	return f(root, d.createDocumentFragment());
};

document.body.appendChild(
    dom2List(
	document.firstElementChild, 
	tagName => {console.log(tagName);}
    )
);
*/
