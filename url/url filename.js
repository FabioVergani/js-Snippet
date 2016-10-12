var l=window.location,s=l.pathname;
if(s.length>1){
 l='/';
 if(s.endsWith(l)){
	//nofile
 }else{
	 if(l=s.lastIndexOf(l)){
		s=s.substring(l+1);//filenameWithExtensionOrAncor
		if(l=s.lastIndexOf('.')){
			s=s.substring(0,l);//filenameOnly
			console.log(s);
		};
	 };
 };
};
