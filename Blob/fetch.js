const filename = ``;
const url = ``;
fetch(url)
    .then(response => {
        // console.dir(response);
        if (response.ok) {
            response.blob()
                .then(fileBlob => {
                    const doc = document;
                    const win = doc.defaultView;
                    const anchorEl = doc.createElement('a');
                    const href = win.URL.createObjectURL(fileBlob);
                    anchorEl.href = href;
                    anchorEl.setAttribute('download', filename);
                    anchorEl.style.display = 'none';
                    doc.body.appendChild(anchorEl);
                    anchorEl.click();
                    anchorEl.addEventListener('load', () => {
                        win.URL.revokeObjectURL(href);
                        doc.body.removeChild(anchorEl);
                    });
                })
                .catch(exception => {
                    console.error(exception);
                });
        } else {
            throw new Error(response);
        }
    })
    .catch(exception => {
        console.error(exception);
    });
