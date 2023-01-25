const containerDiv = document.querySelector(".container-div");
const iframe = document.getElementById("iframe");

containerDiv.addEventListener("focusin", () => console.log("focusin fired"));
iframe.addEventListener("focus", () => console.log("iframe focus fired"));

setTimeout(() => {
  const doc = iframe.contentWindow.document;

  const message = "body has click listener";
  const interactiveContent = `<button>Button</button> <br><br> <a href="#">Link</a> <br><br> <input type="text" placeholder="Text input...">`;
  doc.write(
    `<html><body style='background: #f5f5df;'><div> <h1 style="font-size: 14px">Same Domain Iframe</h1> <p>${message}</p>${interactiveContent}</body> </html>`
  );
  setTimeout(() => {
    doc.body.addEventListener("click", () => {});
    doc.close();
  }, 0);
}, 50); // timeout to solve testcafe Firefox rendering issue
