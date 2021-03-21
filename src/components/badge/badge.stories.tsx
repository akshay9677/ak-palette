import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Badge from "./Badge";

export default {
  title: "Example/Badge",
  component: Badge,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story = (args) => (
  <Badge
    color={args.color}
    label={args.label}
    showClose={args.showClose}
    onClose={() => alert("Closed")}
  />
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Test",
};

export const Green = Template.bind({});
Green.args = {
  label: "Test",
  color: "green",
};
export const Red = Template.bind({});
Red.args = {
  label: "Test",
  color: "red",
};
export const Blue = Template.bind({});
Blue.args = {
  label: "Test",
  color: "blue",
};
export const Yellow = Template.bind({});
Yellow.args = {
  label: "Test",
  color: "yellow",
};
export const Default = Template.bind({});
Default.args = {
  label: "Test",
};
