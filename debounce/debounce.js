// prettier-ignore
const debounce = ( f, delay, context = null )=>{
    const { clearTimeout, setTimeout } = globalThis;
    let e = null;
    return (...args)=>{
        clearTimeout(e);
        e = setTimeout(()=>{ f.apply(context,args) },delay)
    };
};
