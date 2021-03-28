import React, { useState } from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import TimePicker from "./TimePicker";

export default {
  title: "Example/TimePicker",
  component: TimePicker,
} as Meta;

const Template: Story = (args) => {
  return (
    <TimePicker
      width={args.width}
      height={args.height}
      disabled={args.disabled}
      placeholder={args.placeholder}
      isInvalid={args.isInvalid}
      validationText={args.validationText}
      startTime={"12:00 am"}
      endTime={"11:00 pm"}
      step={15}
      clearable={args.clearable}
      is24Hour={false}
    />
  );
};

export const Primary = Template.bind({});
