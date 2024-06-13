import Toggle from "../utils/toggle";

import UrlParser from "../routes/url-parser";
import routes from "../routes/routes";
class App {
  constructor({ hamburger, navMenuMobile, content }) {
    this._hamburger = hamburger;
    this._navMenuMobile = navMenuMobile;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    Toggle.init({
      hamburger: this._hamburger,
      navMenuMobile: this._navMenuMobile,
      content: this._content,
    });
  }

  // fungsi URLParser
  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    this._content.innerHTML = await page.render();
    await page.afterRender();

    const skipLink = document.querySelector(".skip-link");
    const mainContent = document.querySelector("main");
    skipLink.addEventListener("click", (e) => {
      e.preventDefault();
      mainContent.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      skipLink.blur();
    });
  }
}

export default App;
