const svg = `<svg width="250" height="12" viewBox="0 0 250 12" xmlns="http://www.w3.org/2000/svg" >
<rect x="0.00" width="81.02" height="12" fill="#006bff" />
<rect x="81.02" width="154.01" height="12" fill="#ff5722"/>
<rect x="235.04" width="14.96" height="12" fill="#eee"/>
</svg>`;

console.clear();
console.log(
  "%c\u200D",
`
background:url(data:image/svg+xml;base64,${btoa(svg)}) no-repeat;
padding:0 0 0 250px;
margin: 20px;
font:0/12px sans;
`
);
