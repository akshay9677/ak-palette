import React, { useState } from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import TextArea from "./TextArea";

export default {
  title: "Example/TextArea",
  component: TextArea,
} as Meta;

const Template: Story = (args) => {
  const [value, setValue] = useState("");
  return (
    <TextArea
      placeholder={args.placeholder}
      disabled={args.disabled}
      value={value}
      width={args.width}
      isInvalid={args.isInvalid}
      validationText={args.validationText}
      rows={args.rows}
      cols={args.cols}
      onChange={(e: any) => {
        setValue(e.target.value);
        console.log(e.target.value);
      }}
    />
  );
};

export const Primary = Template.bind({});
