import { html } from 'lit-html';

import '../my-family-greeter.js';

export default {
  title: 'MyFamilyGreeter',
  component: 'my-family-greeter',
  argTypes: {
    subjects: { control: 'text' },
  },
};

function Template({ subjects }) {
  return html` <my-family-greeter subjects="${subjects}"></my-family-greeter> `;
}

export const KnownFamily = Template.bind({});
KnownFamily.args = {
  subjects: 'Adam, Eve, Jane',
};
