const cInputTemplate = document.createElement('template');
cInputTemplate.innerHTML = `
  <link rel="stylesheet" href="components/c-input/c-input.css">
  <input
    type="number"
    inputmode="numeric"
    id="calculator-input"
  >
`;

class cInput extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(cInputTemplate.content.cloneNode(true));
  }
}

window.customElements.define('c-input', cInput);
