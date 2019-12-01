(async w=>{
	console.log(1);
	await new Promise(resolve=>{resolve(w.open())}).then(value=>{
		console.log(2,value);
	});
	console.log(3);
})(window);
