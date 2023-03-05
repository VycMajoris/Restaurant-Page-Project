import { renderMainHome } from "./initial-page";
import { renderMenu } from "./menu";
import { removeMain } from "./remove-main";
import eventLoadFunc from "./event-listeners";
import "./style.css";

export function createHtmlElement(type, text, className = "") {
  const name = document.createElement(type);
  name.setAttribute("class", className);
  if (text !== undefined) name.innerHTML = text;

  return name;
}

export function createImgElement(imgName, alt) {
  const name = document.createElement("img");
  name.setAttribute("src", `../assets/images/pizza-types/${imgName}`);
  name.setAttribute("alt", alt);

  return name;
}

renderMainHome();
eventLoadFunc();

/* ********* */

function removeMain2() {
  const main = document.querySelector("main");
  const mainContent = document.querySelector(".main-content");

  main.innerHTML = "";
}
