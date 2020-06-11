//m:array,fileName
const downloadBlob = (m, s, t=100) => {
  const { URL, Blob, document: d } = globalThis, a = d.createElement("a"), o = URL.createObjectURL(new Blob(m));
  a.href = o;
  a.setAttribute("download", s);
  a.style.display = "none";
  d.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(()=>{URL.revokeObjectURL(o)}, t);
};
