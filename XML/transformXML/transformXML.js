function transformXML(s,t){
	const a=new DOMParser(), b=new XSLTProcessor();
	b.importStylesheet(a.parseFromString(t,'text/xml'));
	return b.transformToDocument(a.parseFromString(s,'text/xml').firstChild);
}
