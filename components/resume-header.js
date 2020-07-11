class ResumeHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.initTemplate();
  }

  initTemplate() {
    this.shadowRoot.innerHTML = `
      ${this.css()}
      <header>
        <h1>Selahattin Ünlü</h1>
        <p>Freelance Full Stack Developer</p>

        <div>
          <p>Mail: selahattin.unlu [at] yandex.com</p>
          <p>
            Github:
            <a href="https://github.com/selahattinunlu" target="_blank">
              github.com/selahattinunlu
            </a>
          </p>
          <p>Phone Number: +90 535 582 7574</p>
        </div>
      </header>
    `;
  }

  css() {
    return `
      <style>
        a {
          color: var(--primary-color);
          text-decoration: none;
        }

        header h1 {
          color: var(--dark-gray);
          margin: .4em 0;
        }

        header > p {
          margin-top: 0;
          color: var(--light-gray);
        }

        header > div {
          color: var(--light-gray);
        }
      </style>
    `;
  }
}

customElements.define("su-resume-header", ResumeHeader);
