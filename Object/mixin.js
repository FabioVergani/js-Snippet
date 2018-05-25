//iterates over the enumerable properties of an object, a:source, b:target
const mixin=(a,b=Object.create(null))=>{
	for(const i in a){
		b[i]=a[i];
	};
	return b;
};
//console.dir(mixin({ss:44}));
