import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Container from "ui-box";
import { Text } from "../index";
import styles from "./styles.module.css";

const ComponentCard = ({ name, img, isFoundation }) => {
  return (
    <Container
      borderRadius={6}
      className={styles.palCardComp}
      cursor="pointer"
      onClick={() => {
        if (isFoundation) {
          window.location.href = `/docs/foundation/${name.toLowerCase()}`;
        } else {
          window.location.href = `/docs/component-docs/${name.toLowerCase()}`;
        }
      }}
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
        paddingTop={15}
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
