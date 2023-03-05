import { createHtmlElement } from "./index.js";

export function renderNav() {
  const navText = ["HOME", "MENU", "ABOUT"];

  const nav = createHtmlElement("nav", undefined, "navigation");

  for (let i = 0; i < navText.length; i++) {
    const a = document.createElement("a");
    a.innerHTML = navText[i];
    nav.appendChild(a);
  }

  const mainContainer = document.querySelector(".main-container");
  mainContainer.appendChild(nav);
}
