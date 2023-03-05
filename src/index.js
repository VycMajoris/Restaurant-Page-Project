import { renderMainHome } from "./initial-page";
import { renderMenu } from "./menu";
import { removeMain } from "./remove-main";
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

const menuButton = document.querySelector(".menuBtn");

menuButton.addEventListener("click", removeMain);
menuButton.addEventListener("click", renderMenu);
