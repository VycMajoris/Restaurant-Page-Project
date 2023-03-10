import { createHtmlElement } from "./index.js";

export function renderNav() {
  const navText = ["HOME", "MENU", "ABOUT US"];

  const nav = createHtmlElement("nav", undefined, "navigation");

  for (let i = 0; i < navText.length; i++) {
    const a = document.createElement("a");
    i === 0
      ? a.setAttribute("class", "anchorHome")
      : i === 1
      ? a.setAttribute("class", "anchorMenu")
      : i === 2
      ? a.setAttribute("class", "anchorAbout")
      : null;
    a.innerHTML = navText[i];
    nav.appendChild(a);
  }

  const mainContainer = document.querySelector(".main-container");
  const divider = createHtmlElement("div", undefined, "divider");
  mainContainer.appendChild(nav);
  mainContainer.appendChild(divider);
}
