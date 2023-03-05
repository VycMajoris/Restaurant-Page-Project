export function removeMain() {
  const main = document.querySelector("main");
  const mainContent = document.querySelector(".main-content");
  main.removeChild(mainContent);
}
