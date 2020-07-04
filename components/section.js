class Section extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    if (!this.attributes.image) {
      throw new Error("su-section requires image property!");
    }

    if (!this.attributes.title) {
      throw new Error("su-section requires title property!");
    }

    this._css = ``;

    this.initCss();
    this.initTemplate();
  }

  initTemplate() {
    this.shadowRoot.innerHTML = `
      ${this._css}
      <section>
        <div class="image-container">
          <img
            src="${this.attributes.image.value}"
            alt=""
            class=""
          />
        </div>

        <div>
          <h3>${this.attributes.title.value}</h3>
          <slot></slot>
        </div>
      </section>
    `;
  }

  initCss() {
    this._css = `
      <style>
      section {
        display: flex;
        flex-direction: column;
      }

      section .image-container {
        display: flex;
        justify-content: center;
      }

      section h3 {
        text-align: center;
        color: var(--gray);
      }

      @media screen and (min-width: 768px) {
        section {
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
        }

        section .image-container {
          margin-right: 1em;
        }

        section h3 {
          text-align: left;
        }
      }
      </style>
    `;
  }
}

customElements.define("su-section", Section);
