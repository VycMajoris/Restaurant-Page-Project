import createHtmlElement from "./index.js";
import { renderNav } from "./navbar.js";
import { RenderMain } from "./main.js";
import { renderFooter } from "./footer.js";

export function renderMainHome() {
  renderNav();
  RenderMain();
  renderFooter();
}
