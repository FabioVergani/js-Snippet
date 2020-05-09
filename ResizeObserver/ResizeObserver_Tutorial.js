const myObserver = new ResizeObserver(entries => {
  for (const entry of entries) {
    const { target, contentRect } = entry;
    const { floor } = Math;
    const width = floor(contentRect. width);
    const height = floor(contentRect.height);
    const angle = floor((width / 360) * 100);

    
    target.style.background = `linear-gradient(${angle}deg, #eee 50%, #fff 50%)`;
    target.querySelector(
      ".info"
    ).innerText = `${width} x ${height}`;
  }
});

document.querySelectorAll(".box").forEach((box) => {
  myObserver.observe(box);
});
