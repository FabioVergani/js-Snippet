const fileNameFrom=x=>{
	let s=x,i=s.indexOf('//');
	return -1!==(i=(s=s.substring(s.indexOf('/',i+1)+1)).lastIndexOf('/',s.lastIndexOf('.')))&&(s=s.substring(i+1)).substring(0,s.lastIndexOf('.'))
};


let urls=[
	'https://i.imgur.com/WCzfMMt.jpg?q=1',
	'https://i.imgur.com/QCFXhpg.jpg#2',
	'https://i.imgur.com/esOG86I.jpg',
	'https://i.imgur.com/esOG.2I.jpg',
	'https://i.imgur.com/s.jsp',
	'https://i.imgur.com/',
	'https://i.imgur.com',
	'bad'
];
//
urls.forEach(x=>{console.log('%s\n%s',x,fileNameFrom(x))});
