const w1 = window;
const windowOpenPromise = (url, target) => {
  return new Promise((resolve, reject) => {
    w2 = w1.open(
      url,
      target
    );
    return w2
      ? resolve(w2)
      : reject()
      ;
  })
}

windowOpenPromise().then(opened=>{
  console.dir(opened.document)
  alert(66)
})
