import renderMainHome from "./initial-page";
import "./style.css";

export default function createHtmlElement(type, text, className = "") {
  const name = document.createElement(type);
  name.setAttribute("class", className);
  if (text !== undefined) name.innerHTML = text;

  return name;
}

renderMainHome();
