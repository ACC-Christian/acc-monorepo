import React from 'react';

import { Button } from './Button';

export default {
  title: 'Elements/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
  position: 'unset',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  position: 'unset',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Large Button',
  position: 'unset',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Medium Button',
  position: 'unset',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
  position: 'unset',
};
