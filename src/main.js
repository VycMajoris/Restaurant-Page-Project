// "main" content in the home page

import { createHtmlElement } from "./index.js";
import eventLoadFunc from "./event-listeners.js";
import { removeMain } from "./remove-main";
import { renderMenu } from "./menu";

export function renderMain() {
  const main = createHtmlElement("main", undefined, undefined);
  main.setAttribute("class", "main");
  const divider = createHtmlElement("div", undefined, "divider");

  main.appendChild(createContent());

  const mainContainer = document.querySelector(".main-container");

  mainContainer.appendChild(main);
  mainContainer.appendChild(divider);

  return { main, divider, mainContainer };
}

export function createContent() {
  const mainContent = createHtmlElement("div", undefined, "main-content");
  const nestedText = createHtmlElement("div", undefined, "nested-text");
  const pWelcome = createHtmlElement("p", "Welcome to", "welcome");
  const h1Pizzamania = createHtmlElement("h1", "PIZZAMANIA", undefined);
  const smallDivider = createHtmlElement("div", undefined, "small-divider");
  const pMotto = createHtmlElement(
    "p",
    "Delicious pizzas to remember for a life time!",
    "motto"
  );
  const button = createHtmlElement("button", "SEE THE MENU", "menuBtn");
  button.addEventListener("click", removeMain);
  button.addEventListener("click", renderMenu);

  nestedText.appendChild(pWelcome);
  nestedText.appendChild(h1Pizzamania);
  mainContent.appendChild(nestedText);
  mainContent.appendChild(smallDivider);
  mainContent.appendChild(pMotto);
  mainContent.appendChild(button);

  const main = document.querySelector("main");
  if (main !== null) main.appendChild(mainContent);

  return mainContent;
}

/* export function renderMain() {
  const main = createHtmlElement("main", undefined, undefined);
  main.setAttribute("class", "main");
  const divider = createHtmlElement("div", undefined, "divider");

  const mainContent = createHtmlElement("div", undefined, "main-content");
  const nestedText = createHtmlElement("div", undefined, "nested-text");
  const pWelcome = createHtmlElement("p", "Welcome to", "welcome");
  const h1Pizzamania = createHtmlElement("h1", "PIZZAMANIA", undefined);
  const smallDivider = createHtmlElement("div", undefined, "small-divider");
  const pMotto = createHtmlElement(
    "p",
    "Delicious pizzas to remember for a life time!",
    "motto"
  );
  const button = createHtmlElement("button", "SEE THE MENU", "menuBtn");

  nestedText.appendChild(pWelcome);
  nestedText.appendChild(h1Pizzamania);
  mainContent.appendChild(nestedText);
  mainContent.appendChild(smallDivider);
  mainContent.appendChild(pMotto);
  mainContent.appendChild(button);

  main.appendChild(mainContent);

  const mainContainer = document.querySelector(".main-container");

  mainContainer.appendChild(main);
  mainContainer.appendChild(divider);

  return { main, mainContent, divider, mainContainer };
} */
