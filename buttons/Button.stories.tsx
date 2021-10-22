import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'xBootStyle/Buttons',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => 
<Button {...args}>
  Button
</Button>;

export const Primary = Template.bind({});
Primary.args = {
  valiant: "primary"
};