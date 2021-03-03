import React from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import Alert from "./Alert";

export default {
  title: "Example/Alert",
  component: Alert,
} as Meta;

const Template: Story = (args) => {
  return (
    <Alert
      label={args.label}
      type={args.type}
      title={args.title}
      onClose={() => alert(args.type)}
      showLoading={args.showLoading}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {
  label: "This is a sample alert",
};
