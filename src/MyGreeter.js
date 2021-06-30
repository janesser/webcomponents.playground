// https://developers.google.com/web/fundamentals/web-components/shadowdom -->

export class MyGreeter extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
<style>div { color: red; }</style>
<div>Hello awesome <slot name="my-name">Unknown</slot>, glad to see ya!</div>`;

    this.$myName = '';
  }

  static get observedAttributes() {
    return ['subject'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.$myName = newValue;

    this.shadowRoot.querySelector('slot[name="my-name"]').textContent =
      this.$myName;
  }
}
