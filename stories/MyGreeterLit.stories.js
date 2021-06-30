import { html } from 'lit-html';

import { MyGreeter as MyGreeterLit } from '../src/MyGreeterLit.js';

window.customElements.define('my-greeter-lit', MyGreeterLit);

export default {
  title: 'MyGreeterLit',
  component: 'my-greeter-lit',
  argTypes: {
    subject: { control: 'text' },
  },
};

function Template({ subject }) {
  if (subject)
    return html` <my-greeter-lit subject="${subject}"></my-greeter-lit> `;
  return html`<my-greeter-lit></my-greeter-lit>`;
}

export const UnknownPerson = Template.bind({});

export const KnownPerson = Template.bind({});
KnownPerson.args = {
  subject: 'Sam',
};
