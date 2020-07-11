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
        a {
          color: var(--primary-color);
          text-decoration: none;
        }

        section {
          padding-left: var(--resume-indentation-gap);
          margin-bottom: 2em;
        }

        h3 {
          color: var(--gray);
          margin-bottom: .4em;
        }

        .description {
          color: var(--gray);
          line-height: 1.5;
          margin-bottom: .8em;
        }
      </style>
    `;
  }
}

customElements.define("su-resume-side-project", ResumeSideProject);
