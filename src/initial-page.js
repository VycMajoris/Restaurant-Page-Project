import createHtmlElement from "./index.js";
import { renderNav } from "./navbar.js";
import { renderMain, renderMainOnly } from "./main.js";
import { renderFooter } from "./footer.js";

export function renderMainHome() {
  renderNav();
  renderMain();
  renderFooter();
}
