import React from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import Card from "./Card";
import Text from "../typography/Text";

export default {
  title: "Example/Card",
  component: Card,
} as Meta;

const Template: Story = (args) => {
  return (
    <Card
      header={args.header}
      footer={<Text>Footer</Text>}
      width={args.width}
      src={args.src}
    >
      <div>
        Standard cards use a background container to organize information. Quiet
        cards do not have a container; the components inside float on the
        background.{" "}
      </div>
    </Card>
  );
};

export const Primary = Template.bind({});
