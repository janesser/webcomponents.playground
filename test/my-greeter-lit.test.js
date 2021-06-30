import { html, fixture, expect } from '@open-wc/testing';

import { MyGreeter as MyGreeterLit } from '../src/MyGreeterLit.js';

window.customElements.define('my-greeter-lit', MyGreeterLit);

describe('MyGreeterLit', () => {
  it('greets known person', async () => {
    const el = await fixture(
      html`<my-greeter-lit subject="Sam"></my-greeter-lit>`
    );

    expect(el.subject).to.equal('Sam');
    expect(el.shadowDom).to.be.accessible();

    const person = el.shadowRoot.querySelector('span'); // TODO abstract from impl detail
    expect(person).to.be.not.equal('Unknown');
  });
});
