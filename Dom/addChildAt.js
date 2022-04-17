const addChildAt = (parent, child, index) => {
	if (index >= parent.children.length) {
		parent.append(child);
	} else {
		parent.insertBefore(child, parent.children[index]);
	}
};
