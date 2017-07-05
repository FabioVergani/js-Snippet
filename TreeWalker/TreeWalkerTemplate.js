(function($){
 const $d=$.document, $b=$d.body;
 if($b){
	const walker=$d.createTreeWalker($b,-1,{acceptNode:function(walked){return 1;}});
	let currentnode;
	do{
		currentnode=walker.currentNode;
    console.log(currentnode.tagName);
	}while(nextnode=walker.nextNode());
 };
})(window);





/*
NodeFilter.FILTER_ACCEPT =1
whatToShow
Read only. Returns an unsigned long being a bitmask made of constants describing the types of Node that must to be presented. 
Non-matching nodes are skipped, but their children may be included, if relevant. 
The possible values are:

	-1					NodeFilter.SHOW_ALL
	1					NodeFilter.SHOW_ELEMENT
	4					NodeFilter.SHOW_TEXT	hows Text nodes
	64				NodeFilter.SHOW_PROCESSING_INSTRUCTION	
	128			NodeFilter.SHOW_COMMENT
	256			NodeFilter.SHOW_DOCUMENT
	512			NodeFilter.SHOW_DOCUMENT_TYPE
	1024		NodeFilter.SHOW_DOCUMENT_FRAGMENT

obsolete:

	2					NodeFilter.SHOW_ATTRIBUTE
	8					NodeFilter.SHOW_CDATA_SECTION
	16				NodeFilter.SHOW_ENTITY_REFERENCE
	32				NodeFilter.SHOW_ENTITY
	2048		NodeFilter.SHOW_NOTATION 

*/
