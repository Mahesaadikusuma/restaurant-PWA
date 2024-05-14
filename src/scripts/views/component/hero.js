class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero">
        <div class="hero-body">
          <h1 class="hero-title">Yuna Restaurant App.</h1>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
            tempore odio labore, reprehenderit quae
          </p>
        </div>
      </div>
          `;
  }
}

customElements.define("hero-bar", Hero);
