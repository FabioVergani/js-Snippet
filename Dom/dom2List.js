const dom2list = root => {
	if(1 !== root?.nodeType){
		return false;
	}else{
		const d = root.ownerDocument;
		const nest = (a,b) => a.appendChild(d.createElement(b));
		const ul = nest(d.createDocumentFragment(),'ul');
		const walk = (father,list) => {
			const li = nest(list,'li');
			li.textContent = father.nodeName;
			const nodes = father.children;
			if(nodes?.length){
				const sublist = nest(li,'ul');
				for (const node of nodes) {
					walk(node,sublist);
				}
			}
		};
		walk(root,ul);
		return ul;
	}
};

//document.body.appendChild(dom2list(document.firstElementChild));


/*

const dom2list = (root, fn) => {
	if (1 !== root?.nodeType) {
		return false;
	} else {
		const d = root.ownerDocument;
		const nest = (a, b) => a.appendChild(d.createElement(b));
		const ul = x => nest(x, 'ul');
		const e = ul(d.createDocumentFragment());
		const walk = (a, b) => {
			const li = nest(b, 'li');
			fn(li, a);
			const m = a.children;
			if (m?.length) {
				const c = ul(li);
				for (const node of m) {
					walk(node, c);
				}
			}
		};
		walk(root, e);
		return e;
	}
};

document.body.appendChild(
	dom2list(document.firstElementChild, (li, father) => {
		li.textContent = father.nodeName;
	})
);


*/
