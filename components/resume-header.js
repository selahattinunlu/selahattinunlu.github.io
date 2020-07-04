class ResumeHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.initTemplate();
  }

  initTemplate() {
    this.shadowRoot.innerHTML = `
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
}

customElements.define("su-resume-header", ResumeHeader);
