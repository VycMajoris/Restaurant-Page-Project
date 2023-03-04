import createHtmlElement from "./index.js";
import renderNav from "./navbar.js";
import renderMain from "./main.js";
import renderFooter from "./footer.js";

export default function renderMainHome() {
  renderNav();
  renderMain();
  renderFooter();
}

/* export default function initialPage() {
    const mainContainer = document.querySelector(".main-container");
    const nav = document.createElement("nav");
    const main = document.createElement("main");
    const divider = document.createElement("div");
    const mainContent = document.createElement("div");
    const nestedText = document.createElement("div");
    const smallDivider = document.createElement("div");
    const pWelcome = document.createElement("p");
    const h1Pizzamania = document.createElement("h1");
    const pMotto = document.createElement("p");
    const button = document.createElement("button");
    const h2 = document.createElement("h2");
    const footer = document.createElement("footer");
  
    nav.setAttribute("class", "navigation");
    divider.setAttribute("class", "divider");
    mainContent.setAttribute("class", "main-content");
    nestedText.setAttribute("class", "nested-text");
    divider.setAttribute("class", "divider");
    pMotto.setAttribute("class", "motto");
    smallDivider.setAttribute("class", "small-divider");
    pWelcome.setAttribute("class", "welcome");
  
    pWelcome.innerHTML = "Welcome to";
    h1Pizzamania.innerHTML = "PIZZAMANIA";
    pMotto.innerHTML = "Delicious pizzas to remember for a life time!";
    button.innerHTML = "SEE THE MENU";
    h2.innerHTML = "Developed by VycMajoris";
  
    const navText = ["HOME", "MENU", "ABOUT"];
  
    for (let i = 0; i < navText.length; i++) {
      const a = document.createElement("a");
      a.innerHTML = navText[i];
      nav.appendChild(a);
    }
  
    mainContainer.appendChild(nav);
  
    main.appendChild(divider);
  
    nestedText.appendChild(pWelcome);
    nestedText.appendChild(h1Pizzamania);
  
    mainContent.appendChild(nestedText);
    mainContent.appendChild(smallDivider);
    mainContent.appendChild(pMotto);
    mainContent.appendChild(button);
  
    main.appendChild(mainContent);
    main.appendChild(divider);
  
    mainContainer.appendChild(main);
  
    footer.appendChild(h2);
  
    mainContainer.appendChild(footer);
  } */
