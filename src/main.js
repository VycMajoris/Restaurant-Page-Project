// "main" content in the home page

import createHtmlElement from "./index.js";

export default function renderMain() {
  const main = createHtmlElement("main", undefined, undefined);

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
  const button = createHtmlElement("button", "SEE THE MENU", undefined);

  nestedText.appendChild(pWelcome);
  nestedText.appendChild(h1Pizzamania);
  mainContent.appendChild(nestedText);
  mainContent.appendChild(smallDivider);
  mainContent.appendChild(pMotto);
  mainContent.appendChild(button);

  main.appendChild(divider);
  main.appendChild(mainContent);
  main.appendChild(divider);

  const mainContainer = document.querySelector(".main-container");
  mainContainer.appendChild(main);
}
