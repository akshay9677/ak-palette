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
  {
    img: "components/patterns.svg",
    name: "Patterns",
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
          <Text fontWeight={700} paddingTop={20} size="xxxlarge">
            Foundations
          </Text>
          <Text paddingY={3} size="medium">
            Foundations are the visual elements needed to create engaging
            end-to-end user experiences. This includes guidance on iconography,
            typography, layout and structure.
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
