function logarithmBase10(n){
	let i=0;
	for(let j=n;j>=1;++i){
		j/=10
  };
  console.log(i);
	return i;
}

logarithmBase10(0.9);
logarithmBase10(1);
logarithmBase10(1e1);
logarithmBase10(1e2);
logarithmBase10(1e3);
logarithmBase10(1e4);
logarithmBase10(1e5);
logarithmBase10(1e6);
logarithmBase10(1e7);
logarithmBase10(1e8);
logarithmBase10(1e9);
