class ResumeExperience extends HTMLElement {
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
        <div class="date">${this.attributes.date.value}</div>
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

        .date {
          color: var(--light-gray);
          font-size: .9em;
        }

        .description {
          margin-top: 1em;
          color: var(--gray);
          line-height: 1.5;
        }
      </style>
    `;
  }
}

customElements.define("su-resume-experience", ResumeExperience);
