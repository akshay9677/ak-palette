import React from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import Accordian from "./Accordion";

export default {
  title: "Example/Accordian",
  component: Accordian,
} as Meta;

const Template: Story = (args) => {
  return (
    <Accordian>
      <Accordian.Item header="Header">Akshay</Accordian.Item>
      <Accordian.Item header="Header">Akshay</Accordian.Item>
    </Accordian>
  );
};

export const Primary = Template.bind({});
