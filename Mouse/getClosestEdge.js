//trbl = [0,1,2,3]

const getClosestEdge = (elem,x,y) => {
	const
			e = bounds.get(elem),
			{abs:f,min}=Math,
			//distance from edge:
			t = f(e.top - y),
			r = f(e.right - x),
			b = f(e.bottom - y),
			l = f(e.left - x);
	switch(min(t,b,l,r)){
		case t:return 0;
		case r:return 1;
		case b:return 2;
		case l:return 3;
	}
}
