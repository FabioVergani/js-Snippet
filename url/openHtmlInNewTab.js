function openHtmlInNewTab(content, title) {
  const e = URL.createObjectURL(new Blob([`
    <html>
      <head>
        <meta charset="UTF-8">
        <title>${title}</title>
      </head>
      <body>
        ${content}
      </body>
    </html>
  `], { type: "text/html" }));
  window.open(e)
  URL.revokeObjectURL(e)
};
