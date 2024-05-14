import "regenerator-runtime";
import "../styles/main.scss";
import "./views/component/hero.js";
import App from "./views/app";

import swRegister from "./utils/sw-register";

console.log("Hello Coders!");

const app = new App({
  hamburger: document.querySelector("#hamburger"),
  navMenuMobile: document.querySelector("#menuMobile"),
  content: document.querySelector("#main"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
});
