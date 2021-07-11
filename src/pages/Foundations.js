import React from "react";
import Container from "ui-box";
import ComponentCard from "./ComponentCard";
import { Text } from "../index";
import styles from "./styles.module.css";
import Layout from "@theme/Layout";

const COMPONENT_HASH = [
  {
    img: "components/color.svg",
    name: "Color",
  },
  {
    img: "components/typography.svg",
    name: "Typography",
  },
];

const FoundationsList = () => {
  return (
    <Layout
      title={`Palette UI Kit`}
      description="Description will go into a meta tag in <head />"
    >
      <Container className={styles.componentList}>
        <Container className={styles.componentHeader}>
          <Text fontWeight={600} paddingTop={20} size="xxlarge">
            Foundations
          </Text>
          <Text paddingY={3} size="medium">
            Components are the reusable building blocks of our design system.
            Each component meets a specific interaction or UI need, and has been
            specifically created to work together to create patterns and
            intuitive user experiences.
          </Text>
        </Container>
        <Container
          padding={20}
          flexWrap="wrap"
          className={styles.foundationContainer}
        >
          {COMPONENT_HASH.map((component, index) => {
            return (
              <ComponentCard
                key={index}
                img={component.img}
                summary={component.summary}
                name={component.name}
                isFoundation
              />
            );
          })}
        </Container>
      </Container>
    </Layout>
  );
};

export default FoundationsList;
