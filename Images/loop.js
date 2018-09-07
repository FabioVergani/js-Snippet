(w=>{
	const d=w.document, images=[...d.images];
	while(images.length){
		const image=images.shift();
		console.log(image.src)
	}
})(window);
