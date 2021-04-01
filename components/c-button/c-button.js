const cButtonTemplate = document.createElement('template');
cButtonTemplate.innerHTML = `
  <link rel="stylesheet" href="components/c-button/c-button.css">
  <button
    type="button"
    class="calculator-digit"
  >
    <slot />
  </button>
`;

class cButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(cButtonTemplate.content.cloneNode(true));
  }
}

window.customElements.define('c-button', cButton);
