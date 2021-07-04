import React, { useState } from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import Pagination from "./Pagination";

export default {
  title: "Example/Pagination",
  component: Pagination,
} as Meta;

const Template: Story = () => {
  const [page, setPage] = useState(1);
  return (
    <Pagination
      page={page}
      totalPages={10}
      onPageChange={(currPage) => setPage(currPage)}
    />
  );
};

export const Primary = Template.bind({});
