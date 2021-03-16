import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Modal from "./Modal";

export default {
  title: "Example/Modal",
  component: Modal,
} as Meta;

const Template: Story = (args) => {
  return (
    <>
      {" "}
      <div>Dummy Content</div>
      <div>Dummy Content</div>
      <div>Dummy Content</div>
      <div>Dummy Content</div>
      <div>Dummy Content</div>
      <Modal
        onClose={() => !args.open}
        open={args.open}
        header={args.header}
        size={args.size}
        primaryButton={args.primaryButton}
        secondaryButton={args.secondaryButton}
        hideFooter={args.hideFooter}
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </Modal>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
