import React from "react";
import Container from "ui-box";
import ComponentCard from "./ComponentCard";
import { Text } from "../index";
import styles from "./styles.module.css";
import Layout from "@theme/Layout";

const COMPONENT_HASH = [
  {
    img: "components/accordian.svg",
    name: "Accordian",
  },
  {
    img: "components/alert.svg",
    name: "Alert",
  },
  {
    img: "components/avatar.svg",
    name: "Avatar",
  },
  {
    img: "components/badge.svg",
    name: "Badge",
  },
  {
    img: "components/button.svg",
    name: "Button",
  },
  {
    img: "components/card.svg",
    name: "Card",
  },
  {
    img: "components/checkbox.svg",
    name: "Checkbox",
  },
  {
    img: "components/datepicker.svg",
    name: "DatePicker",
  },
  {
    img: "components/input.svg",
    name: "Input",
  },
  {
    img: "components/modal.svg",
    name: "Modal",
  },
  {
    img: "components/pagination.svg",
    name: "Pagination",
  },
  {
    img: "components/popover.svg",
    name: "Popover",
  },
  {
    img: "components/radio.svg",
    name: "Radio",
  },
  {
    img: "components/select.svg",
    name: "Select",
  },
  {
    img: "components/sidesheet.svg",
    name: "Sidesheet",
  },
  {
    img: "components/spinner.svg",
    name: "Spinner",
  },
  {
    img: "components/tab.svg",
    name: "Tab",
  },
  {
    img: "components/table.svg",
    name: "Table",
  },
  {
    img: "components/textarea.svg",
    name: "Textarea",
  },
  {
    img: "components/timepicker.svg",
    name: "Timepicker",
  },
  {
    img: "components/toaster.svg",
    name: "Toast",
  },
  {
    img: "components/tooltip.svg",
    name: "Tooltip",
  },
];

const ComponentList = () => {
  return (
    <Layout
      title={`Palette UI Kit`}
      description="Description will go into a meta tag in <head />"
    >
      <Container className={styles.componentList}>
        <Container className={styles.componentHeader}>
          <Text fontWeight={600} paddingTop={20} size="xxlarge">
            Components
          </Text>
          <Text paddingY={3} size="medium">
            Components are the reusable building blocks of our design system.
            Each component meets a specific interaction or UI need, and has been
            specifically created to work together to create patterns and
            intuitive user experiences.
          </Text>
        </Container>
        <Container
          display="flex"
          justifyContent="center"
          padding={15}
          flexWrap="wrap"
        >
          {COMPONENT_HASH.map((component, index) => {
            return (
              <ComponentCard
                key={index}
                img={component.img}
                summary={component.summary}
                name={component.name}
              />
            );
          })}
        </Container>
      </Container>
    </Layout>
  );
};

export default ComponentList;
