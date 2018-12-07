const ext=url=>{
	let s=url,i=s.indexOf('.',s.lastIndexOf('/')+1);
	return -1!==i?(s=s.substring(++i)).substring(0,s.search(/$|[?#]/)):''
}

["design.swf",
"/design.swf",
"http://www.adobe.com/products/flashplayer/include/marquee/design.swf",
"/marquee/design.swf?width=792&height=294",
"design.swf?f=aa.bb",
"designswf?f=aabb",
"../?design.swf?width=792&height=294&.XXX",
"http://www.example.com/some/page.html#fragment1",
"http://www.example.com/some/dynamic.php?foo=bar#fragment1"].forEach(x=>{console.log(ext(x))})

/*
"swf"
"swf"
"swf"
"swf"
"swf"
""
"swf"
"html"
"php"

*/
