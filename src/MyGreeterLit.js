import { html, css, LitElement } from 'lit-element';

export class MyGreeter extends LitElement {
  static get styles() {
    return css`
      :host {
        color: var(--my-greeter-text-color, 'red');
      }
    `;
  }

  static get properties() {
    return {
      subject: { type: String },
    };
  }

  constructor() {
    super();
    this.subject = 'Unknown';
  }

  render() {
    return html`
      <div>Hello awesome <span>${this.subject}</span>, glad to see ya!</div>
    `;
  }
}
