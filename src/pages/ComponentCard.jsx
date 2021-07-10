import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Container from "ui-box";
import { Text } from "../index";
import styles from "./styles.module.css";

const ComponentCard = ({ name, img }) => {
  return (
    <Container
      borderRadius={10}
      className={styles.palCardComp}
      margin={15}
      cursor="pointer"
      onClick={() =>
        (window.location.href = `/docs/component-docs/${name.toLowerCase()}`)
      }
      display="flex"
      alignItems="center"
      flexDirection="column"
    >
      <img
        className={styles.palComponentImage}
        src={useBaseUrl(img)}
        alt="logo-svg"
      />
      <Container
        paddingX={10}
        paddingY={6}
        marginBottom={10}
        textAlign="center"
      >
        <Text size="medium" fontWeight={500}>
          {name}
        </Text>
      </Container>
    </Container>
  );
};

export default ComponentCard;
