import React, { useState } from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import Radio from "./Radio";

export default {
  title: "Example/Radio",
  component: Radio,
} as Meta;

const Template: Story = (args) => {
  const [isChecked, setChecked] = useState(false);
  return (
    <Radio
      label={args.label}
      checked={isChecked}
      onChange={(e) => setChecked(e.target.value)}
      disabled={args.disabled}
    />
  );
};

export const Primary = Template.bind({});
