import React from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import Table from "./Table";
import Text from "../typography/Text";
import Avatar from "../avatar/Avatar";

export default {
  title: "Example/Table",
  component: Table,
} as Meta;

const Template: Story = () => {
  return (
    <Table>
      <Table.Head>
        <Table.Cell>
          <Text>User</Text>
        </Table.Cell>
        <Table.Cell>
          <Text>Name</Text>
        </Table.Cell>
        <Table.Cell>
          <Text>Email</Text>
        </Table.Cell>
      </Table.Head>
      <Table.Body height={200}>
        {[1, 2, 3, 4, 5, 6].map((value: any) => {
          return (
            <Table.Row key={`row-${value}`}>
              {[1, 2, 3].map((value: any) => {
                if (value === 1) {
                  return (
                    <Table.Cell key={`cell-${value}`}>
                      <Avatar label="Akshay Kannan" size={30} />
                    </Table.Cell>
                  );
                } else {
                  return (
                    <Table.Cell key={`cell-${value}`}>
                      <Text>Akshay Kannan</Text>
                    </Table.Cell>
                  );
                }
              })}
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export const Primary = Template.bind({});
