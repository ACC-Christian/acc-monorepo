import React from 'react';

import { ExitModal } from './ExitModal';

export default {
  title: 'Example/Header',
  component: ExitModal,
};

const Template = (args) => <ExitModal {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
