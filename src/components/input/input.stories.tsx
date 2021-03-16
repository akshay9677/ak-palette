import React, { useState } from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import Input from "./Input";

export default {
  title: "Example/Input",
  component: Input,
} as Meta;

const Template: Story = (args) => {
  const [value, setValue] = useState("");
  return (
    <Input
      placeholder={args.placeholder}
      size={args.size}
      disabled={args.disabled}
      value={value}
      width={args.width}
      isValid={args.isValid}
      validationText={args.validationText}
      onChange={(e: any) => {
        setValue(e.target.value);
        console.log(e.target.value);
      }}
    />
  );
};

export const Primary = Template.bind({});
