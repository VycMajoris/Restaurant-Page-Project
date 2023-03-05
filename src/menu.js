import { createHtmlElement, createImgElement } from "./index.js";
import deluxeImage from "../assets/images/pizza-types/deluxe.jpg";
import buffaloImage from "../assets/images/pizza-types/buffalo.jpg";
import caliChickenImage from "../assets/images/pizza-types/caliChicken.jpg";
import honoluluImage from "../assets/images/pizza-types/honolulu.jpg";
import pacificVeggieImage from "../assets/images/pizza-types/pacificVeggie.jpg";
import phillyImage from "../assets/images/pizza-types/philly.jpg";

export function renderMenu() {
  const menuDiv = createHtmlElement("div", undefined, "menu-div");
  const main = document.querySelector("main");
  const deluxe = createHtmlElement("div", undefined, "deluxe-pizza");
  const buffalo = createHtmlElement("div", undefined, "buffalo-pizza");
  const caliChicken = createHtmlElement("div", undefined, "cali-chicken-pizza");
  const honolulu = createHtmlElement("div", undefined, "honolulu-pizza");
  const pacificVeggie = createHtmlElement(
    "div",
    undefined,
    "pacific-veggie-pizza"
  );
  const philly = createHtmlElement("div", undefined, "philly-pizza");

  const deluxeImg = createImgElement(deluxe.jpg, "Deluxe Pizza");
  const buffaloImg = createImgElement(buffalo.jpg, "Buffalo Chicken Pizza");
  const caliChickenImg = createImgElement(
    caliChicken.jpg,
    "Cali Chicken Pizza"
  );
  const honoluluImg = createImgElement(honolulu.jpg, "Honolulu Hawaiian Pizza");
  const pacificVeggieImg = createImgElement(
    pacificVeggie.jpg,
    "Pacific Veggie Pizza"
  );
  const phillyImg = createImgElement(philly.jpg, "Philly Cheese Steak Pizza");

  // ***********************************************************************************//

  const divNames = [
    "deluxe",
    "buffalo",
    "caliChicken",
    "honolulu",
    "pacificVeggie",
    "philly",
  ];

  const pizzaContent = {
    deluxe: [
      "../assets/images/pizza-types/deluxe.jpg",
      "Deluxe",
      "Pepperoni, Italian sausage, green peppers, mushrooms, onions, and mozzarella cheese",
    ],
    buffalo: [
      "../assets/images/pizza-types/buffalo.jpg",
      "Buffalo Chicken",
      "Seasoned chicken, spicy buffalo sauce, cherry tomato & red onion on a Crème Fraîche base, topped with aioli",
    ],
    caliChicken: [
      "../assets/images/pizza-types/caliChicken.jpg",
      "Cali Chicken",
      "Ranch, bacon, grilled chicken breast, tomatoes, and a mix of mozzarella and provolone cheeses",
    ],
    honolulu: [
      "../assets/images/pizza-types/honolulu.jpg",
      "Honolulu Hawaiian",
      "Beef, pineapple, smoked bacon, roasted red peppers, and a mix of mozzarella and provolone cheeses",
    ],
    pacificVeggie: [
      "../assets/images/pizza-types/pacificVeggie.jpg",
      "Pacific Veggie",
      "tomato sauce, mushrooms, onions, roasted red peppers, black olives, spinach, diced tomatoes, and a blend of mozzarella, feta, and provolone cheeses",
    ],
    philly: [
      "../assets/images/pizza-types/philly.jpg",
      "Philly Cheese Steak",
      "beef tenderloin steak, onions, mushrooms, green peppers, provolone cheese",
    ],
  };

  for (let i = 0; i < divNames.length; i++) {
    const div = createHtmlElement("div", undefined, "individualMealDiv");
    const h2Menu = createHtmlElement("h2", undefined, "h2Menu");
    const pMenu = createHtmlElement("p", undefined, "pMenu");
    const img = createHtmlElement("img", undefined, "pizzaImg");

    const pizza = pizzaContent[divNames[i]];
    i === 0
      ? (img.src = deluxeImage)
      : i === 1
      ? (img.src = buffaloImage)
      : i === 2
      ? (img.src = caliChickenImage)
      : i === 3
      ? (img.src = honoluluImage)
      : i === 4
      ? (img.src = pacificVeggieImage)
      : i === 5
      ? (img.src = phillyImage)
      : null;

    h2Menu.innerHTML = pizza[1];
    pMenu.innerHTML = pizza[2];

    div.appendChild(img);
    div.appendChild(h2Menu);
    div.appendChild(pMenu);
    menuDiv.appendChild(div);
  }

  if (main.childNodes.length === 0) {
    main.appendChild(menuDiv);
  }

  const mainContainer = document.querySelector(".main-container");
  /*  mainContainer.style.backgroundColor = "rgba(0,0,0,0.5)"; */
}
