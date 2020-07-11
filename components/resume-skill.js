class ResumeSkill extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.initTemplate();
  }

  initTemplate() {
    this.shadowRoot.innerHTML = `
      ${this.css()}
      <section>
        <h3>${this.attributes.title.value}</h3>
        <div class="description">
          <slot></slot>
        </div>
      </section>
    `;
  }

  css() {
    return `
      <style>
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

customElements.define("su-resume-skill", ResumeSkill);
