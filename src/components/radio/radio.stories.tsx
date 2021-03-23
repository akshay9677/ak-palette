import React from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import Radio from "./Radio";

export default {
  title: "Example/Radio",
  component: Radio,
} as Meta;

const Template: Story = (args) => {
  return <Radio label={args.label} />;
};

export const Primary = Template.bind({});
