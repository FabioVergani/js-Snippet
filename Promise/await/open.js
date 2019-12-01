(async w=>{
	console.log(1);
	await new w.Promise(f=>{f(w.open())}).then(opened=>{
		console.log(2,opened);
	});
	console.log(3);
})(window);
