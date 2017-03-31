	function hide(e){const o=e.style;o.displayPreviusValue=o.display;o.display='none';}
	function show(e){const o=e.style, s=o.displayPreviusValue||o.display;o.display=s!=='none'?s:'block';}
