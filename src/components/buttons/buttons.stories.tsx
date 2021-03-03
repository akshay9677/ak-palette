import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Button from "./Button";

export default {
  title: "Example/Buttons",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story = (args) => (
  <Button
    appearance={args.appearance}
    size={args.size}
    onClick={() => alert("hello")}
    uppercase={args.uppercase}
    disabled={args.disabled}
    color={args.color}
  >
    {args.label}
  </Button>
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  appearance: "secondary",
  label: "Button",
};

export const Mini = Template.bind({});
Mini.args = {
  size: "mini",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};
