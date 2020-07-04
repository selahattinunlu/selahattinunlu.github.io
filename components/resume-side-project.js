class ResumeSideProject extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.initTemplate();
  }

  renderRepoUrl() {
    if (!this.attributes["repo-url"]) {
      return "";
    }

    return `<a href="${this.attributes["repo-url"].value}" target="_blank">Repository</a>`;
  }

  renderDemoUrl() {
    if (!this.attributes["demo-url"]) {
      return "";
    }

    return `<a href="${this.attributes["demo-url"].value}" target="_blank">Live Demo</a>`;
  }

  initTemplate() {
    this.shadowRoot.innerHTML = `
      ${this.css()}
      <section>
        <h3>${this.attributes.title.value}</h3>
        <div class="description">
          <slot></slot>
        </div>
        <div class="links">
          ${this.renderRepoUrl()}
          ${this.renderDemoUrl()}
        </div>
      </section>
    `;
  }

  css() {
    return `
      <style>
        
      </style>
    `;
  }
}

customElements.define("su-resume-side-project", ResumeSideProject);
