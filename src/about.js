export function renderAbout() {
  const main = document.querySelector("main");
  const aboutPageContent = [
    "At PizzaWorld, we believe in the emotional power of food. For many of us, food is a language of love. It's more than just nourishment. It's memories, it's connection, it's comfort.",
    "We understand how truly important our mission is. We are here to bring a smile to people’s faces, an edible hug, a connection to a loved one even though you may not be with them, a moment of nostalgic comfort, a craving from a beloved food memory.",
    "We believe that food brings people together, so we've created a place that connects people with their greatest food memories, experiences and desires. We’ve built a platform that empowers small shops, chefs & restaurants and inspires their passion.",
    "Our mission is to bring you comfort through food. Whatever you dream of. Wherever you are.",
  ];

  const aboutDiv = document.createElement("div");
  aboutDiv.setAttribute("class", "about-div");

  for (let i = 0; i < aboutPageContent.length; i++) {
    const p = document.createElement("p");
    p.setAttribute("class", "about-page-para");
    p.innerHTML = aboutPageContent[i];
    aboutDiv.appendChild(p);
  }
  main.appendChild(aboutDiv);
}
