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
        <div class="date>${this.attributes.date.value}</div>
        <div class="description>
          <slot></slot>
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

customElements.define("su-resume-experience", ResumeExperience);
