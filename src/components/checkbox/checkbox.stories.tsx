import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Checkbox from "./Checkbox";

export default {
  title: "Example/Checkbox",
  component: Checkbox,
} as Meta;

const Template: Story = (args) => {
  const [checked, setChecked] = React.useState(false);
  return (
    <Checkbox
      label={args.label}
      disabled={args.disabled}
      checked={checked}
      onChange={(e) => {
        setChecked(e);
        console.log(e);
      }}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Button",
  disabled: true,
};
