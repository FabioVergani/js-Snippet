const reader = new FileReader;

const parser = new DOMParser;

const startApp = function startApp(xml) {
  return Promise.resolve(xml || doc)
};

const fileUpload = document.getElementById("fileupload");

const label = document.querySelector("label[for=fileupload]");

const handleAppStart = function handleStartApp(xml) {
  console.log("xml document:", xml);
  label.innerHTML = currentFileName + " successfully uploaded";
  // do app stuff
}

const handleError = function handleError(err) {
  console.error(err)
}

let doc;
let currentFileName;

reader.addEventListener("loadend", handleFileRead);

reader.addEventListener("error", handleError);

function handleFileRead(event) {
  label.innerHTML = "";
  currentFileName = "";
  try {
    doc = parser.parseFromString(reader.result, "application/xml");
    fileUpload.value = "";

    startApp(doc)
    .then(function(data) {
        handleAppStart(data)
    })
    .catch(handleError);
  } catch (e) {
    handleError(e);
  }
}

function handleFileUpload(event) {
  let file = fileUpload.files[0];
  if (/xml/.test(file.type)) {
    reader.readAsText(file);
    currentFileName = file.name;
  }
}

fileUpload.addEventListener("change", handleFileUpload)

<input type="file" name="fileupload" id="fileupload" accept=".xml" />
<label for="fileupload"></label>

