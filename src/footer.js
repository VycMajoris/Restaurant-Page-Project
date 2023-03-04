import createHtmlElement from "./index.js";

export default function renderFooter() {
  const footer = createHtmlElement("footer", undefined, undefined);
  const h2 = createHtmlElement(h2, undefined, undefined);
  h2.innerHTML = "Developed by VycMajoris";

  footer.appendChild(h2);

  const mainContainer = document.querySelector(".main-container");
  mainContainer.appendChild(footer);
}
