import React from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import ToolTip from "./ToolTip";

export default {
  title: "Example/ToolTip",
  component: ToolTip,
} as Meta;

const Template: Story = (args) => {
  return (
    <ToolTip label={args.label} placement={args.placement} width={args.width}>
      Hover over me to get a tooltip
    </ToolTip>
  );
};

export const Primary = Template.bind({});
