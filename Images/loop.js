(w=>{
	const d=w.document, images=[...d.images];
	let i=images.length;
	while(i!==0){
		const image=images[--i];
		console.log(i,image.src)
	}
})(window);


/*
(w=>{
	const d=w.document, images=[...d.images];
	while(images.length!==0){
		const image=images.pop();
		console.log(image.src)
	}
})(window);


//OR


(w=>{
	const d=w.document, images=[...d.images];
	while(images.length){
		const image=images.shift();
		console.log(image.src)
	}
})(window);
*/
