Promise.all([
	'https://i.imgur.com/WCzfMMt.jpg',
	'https://i.imgur.com/QCFXhpg.jpg',
	'https://i.imgur.com/esOG86I.jpg',
	'bad'
].map(x=>fetch(x).catch(o=>o))).then(responses=>{
	const ok=responses.filter(o=>o.ok);
	console.log('responses:%O\nok:%O',responses,ok);
});
