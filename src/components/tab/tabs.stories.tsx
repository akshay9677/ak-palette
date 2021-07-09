import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Tab from "./Tab";

export default {
  title: "Example/Tab",
  component: Tab,
} as Meta;

const Template: Story = () => {
  return (
    <Tab>
      <Tab.TabPane tab="Tab 1" key={1}>
        <div>Tab 1</div>
      </Tab.TabPane>
      <Tab.TabPane tab="Tab 2" key={2} disabled>
        Tab 2
      </Tab.TabPane>
      <Tab.TabPane tab="Tab 3" key={3}>
        Tab 3
      </Tab.TabPane>
    </Tab>
  );
};
export const Primary = Template.bind({});
