/**-/
    console.log({
        propsRest,
        others: Object.entries(props).reduce((e,[i,v])=>{
            if(!(i in propsRest)){
                e[i]=v;
            };
            return e;
        },{})
    });
/**/
