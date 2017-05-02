var zodiacsign=(function(x){

	var i, a=x.getMonth(), b=x.getDate();

	if(a!==0){
		if(a!==1){
			if(a!==2){
				if(a!==3){
					if(a!==4){
						if(a!==5){
							if(a!==6){
								if(a!==7){
									if(a!==8){
										if(a!==9){
											if(a!==10){
												if(b<22){i=11}else{i=0}
											}else{//November
												if(b<22){i=10}else{i=11}
											}
										}else{//October
											if(b<23){i=9}else{i=10}
										}
									}else{//September
										if(b<23){i=8}else{i=9}
									}
								}else{//August
									if(b<23){i=7}else{i=8}
								}
							}else{//July
								if(b<23){i=6}else{i=7}
							}
						}else{//June
							if(b<21){i=5}else{i=6}
						}
					}else{//May
						if(b<21){i=4}else{i=5}
					}
				}else{//April
					if(b<20){i=3}else{i=4}
				}
			}else{//March
				if(b<21){i=2}else{i=3}
			}
		}else{//February
			if(b<19){i=1}else{i=2}
		}
	}else{//January
		if(b<20){i=0}else{i=1}
	};

	return ["Capricorn","Aquarius", "Pisces", "Aries","Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio","Sagittarius"][i];

})(new Date());
//=======================================================================================
console.log(zodiacsign)


 







