import React, { useState } from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import SideSheet from "./SideSheet";
import Button from "../buttons/Button";

export default {
  title: "Example/SideSheet",
  component: SideSheet,
} as Meta;

const Template: Story = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Click Me</Button>
      <SideSheet
        onClose={() => setOpen(false)}
        open={open}
        width={args.width}
        position={args.position}
        showClose={args.showClose}
        header={args.header}
      >
        <div style={{ margin: "10px", fontSize: "16px" }}>Test Heading</div>
      </SideSheet>
    </>
  );
};

export const Primary = Template.bind({});
