import { removeMain } from "./remove-main";
import { renderMenu } from "./menu";
import { renderMain, createContent } from "./main";

export default function eventLoadFunc() {
  const menuButton = document.querySelector(".menuBtn");

  menuButton.addEventListener("click", removeMain);
  menuButton.addEventListener("click", renderMenu);

  const homeBtn = document.querySelector(".anchorHome");
  const menuBtnNav = document.querySelector(".anchorMenu");
  const aboutBtn = document.querySelector(".anchorAbout");

  menuBtnNav.addEventListener("click", removeMain);
  menuBtnNav.addEventListener("click", renderMenu);

  homeBtn.addEventListener("click", removeMain);
  homeBtn.addEventListener("click", createContent);
}
