import { createHtmlElement } from "./index.js";

export function renderNav() {
  const navText = ["HOME", "MENU", "ABOUT"];

  const nav = createHtmlElement("nav", undefined, "navigation");

  for (let i = 0; i < navText.length; i++) {
    const a = document.createElement("a");
    a.innerHTML = navText[i];
    nav.appendChild(a);
  }
  /*   const divider = createHtmlElement("div", undefined, "divider");
  nav.appendChild(divider); */
  const mainContainer = document.querySelector(".main-container");
  const divider = createHtmlElement("div", undefined, "divider");
  mainContainer.appendChild(nav);
  mainContainer.appendChild(divider);
}
