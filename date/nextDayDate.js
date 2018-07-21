/*
Remind:

	getDate() method returns the day of the month for the specified date according to local time:
	console.log(new Date('August 19, 1975 23:15:30').getDate());//19

Thus:

	nextDayDate ritorna una data -oggetto- impostata -almeno- al numero del giorno corrente + 1
	console.log(nextDay())//20
	console.log(nextDay(2))//21

*/

const val=x=>x!==undefined&&x!==null;
const isFiniteNumber=x=>{let i=x===0;try{i=i?i:val(x)&&+x===x&&x!==Infinity&&x!==-Infinity}finally{return i}};
const toPositiveInteger=x=>isFiniteNumber(x)?x<=0?0:parseInt(x):0;
//
const nextDayDate=x=>{
	const o=new Date();
	o.setDate(o.getDate()+1+toPositiveInteger(x));
	return o
};
console.log(nextDayDate());
