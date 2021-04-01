const cInputTemplate = document.createElement('template');
cInputTemplate.innerHTML = `
  <link rel="stylesheet" href="components/c-input/c-input.css">
  <div>
    <input
      type="number"
      inputmode="numeric"
      id="calculator-input"
      autofocus
    >
  </div
`;

class cInput extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(cInputTemplate.content.cloneNode(true));
  }

  focusInput() {
    let inputEl = this.shadowRoot.querySelector('input')
    inputEl.focus();
  }

  connectedCallback() {
    let inputEl = this.shadowRoot.querySelector('input')
    inputEl.focus();
    this.shadowRoot.querySelector('div').addEventListener('click', () => this.focusInput());
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('div').removeEventListener();
  }
}

window.customElements.define('c-input', cInput);
