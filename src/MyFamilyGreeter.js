// https://developers.google.com/web/fundamentals/web-components/shadowdom -->

export class MyFamilyGreeter extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['subjects'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.shadowRoot.innerHTML = '';
    if (name === 'subjects') {
      newValue.split(',').forEach(subject => {
        this.shadowRoot.innerHTML += `<my-greeter subject="${subject}"></my-greeter>\n`;
        // runtime dependency on my-greeter
      });
    }
  }
}
