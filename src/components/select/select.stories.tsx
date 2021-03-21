import React from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import Select from "./Select";

export default {
  title: "Example/Select",
  component: Select,
} as Meta;

const Template: Story = (args) => {
  return (
    <Select
      width={args.width}
      height={args.height}
      disabled={args.disabled}
      placeholder={args.placeholder}
      options={[
        { label: "India", value: "IND" },
        { label: "America", value: "USA" },
        { label: "England", value: "UK" },
        { label: "China", value: "CHI" },
        { label: "Spain", value: "SP" },
      ]}
      isInvalid={args.isInvalid}
      validationText={args.validationText}
      onChange={(value: any) => console.log(value)}
      clearable={args.clearable}
      multiple={args.multiple}
      tagColor={args.tagColor}
      collapseTags={args.collapseTags}
    />
  );
};

export const Primary = Template.bind({});
