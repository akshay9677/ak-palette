import React from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import RadioGroup from "./RadioGroup";

export default {
  title: "Example/RadioGroup",
  component: RadioGroup,
} as Meta;

const Template: Story = (args) => {
  return (
    <RadioGroup
      options={[
        { label: "India", value: "IND" },
        { label: "America", value: "USA" },
        { label: "England", value: "UK" },
        { label: "China", value: "CHI" },
        { label: "Spain", value: "SP" },
      ]}
      onChange={(e) => console.log(e)}
      isHorizontal={args.isHorizontal}
      value="UK"
      disabled={args.disabled}
      validationText={args.validationText}
    />
  );
};

export const Primary = Template.bind({});
