import { html } from 'lit-html';

import '../my-greeter-lit.js';

export default {
  title: 'MyGreeterLit',
  component: 'my-greeter-lit',
  argTypes: {
    subject: { control: 'text' },
    textColor: { control: 'color' },
  },
};

function Template({ subject, textColor }) {
  if (subject)
    return html`
      <my-greeter-lit
        subject="${subject}"
        style="--my-greeter-text-color: ${textColor || 'black'}"
      ></my-greeter-lit>
    `;
  return html`<my-greeter-lit></my-greeter-lit>`;
}

export const UnknownPerson = Template.bind({});

export const KnownPerson = Template.bind({});
KnownPerson.args = {
  subject: 'Sam',
};

export const StyledPerson = Template.bind({});
StyledPerson.args = {
  subject: 'Jason',
  textColor: 'blue',
};
