import { html } from 'lit-html';

import '../my-greeter.js';

export default {
  title: 'MyGreeter',
  component: 'my-greeter',
  argTypes: {
    subject: { control: 'text' },
    slotSubject: { control: { type: 'text' } },
  },
};

function Template({ subject, slotSubject }) {
  if (subject) return html` <my-greeter subject="${subject}"></my-greeter> `;
  if (slotSubject)
    return html`
      <my-greeter>
        <span slot="my-name">${slotSubject}</span>
      </my-greeter>
    `;
  return html`<my-greeter></my-greeter>`;
}

export const UnknownPerson = Template.bind({});

export const KnownPerson = Template.bind({});
KnownPerson.args = {
  subject: 'Sam',
};

export const SlottedKnownPerson = Template.bind({});
SlottedKnownPerson.args = {
  slotSubject: `Diana`,
};
