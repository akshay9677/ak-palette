import React from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import Popover from "./Popover";
import Button from "../buttons/Button";

export default {
  title: "Example/Popover",
  component: Popover,
} as Meta;

const Template: Story = (args) => {
  return (
    <Popover
      content={"Kannan"}
      placement={args.placement}
      hideArrow={args.hideArrow}
    >
      <Button>Click Me</Button>
    </Popover>
  );
};

export const Primary = Template.bind({});
