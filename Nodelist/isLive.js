function isLive(collection) {
  if (collection.length < 1) {
    return undefined; //inconclusivw
  }
  let body = document.getElementsByTagName('body')[0];
  let l1 = collection.length;
  let clone = collection.item(0).cloneNode();
  clone.style.display = "none";
  body.appendChild(clone);
  let l2 = collection.length;
  body.removeChild(clone);
  return l2 !== l1;
}

//isLive(document.links) -> true
