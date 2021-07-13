import React from "react";
import { Text } from "../../index";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Container from "ui-box";

const EmptyState = ({ primaryText, secondaryText }) => {
  return (
    <Container
      display="flex"
      flexDirection="column"
      alignItems="center"
      marginTop={60}
    >
      <img
        style={{ width: "250px" }}
        src={useBaseUrl("img/empty.svg")}
        alt="Empty"
      />
      <Text size="xlarge">{primaryText}</Text>
      <Text size="medium">{secondaryText}</Text>
    </Container>
  );
};

export default EmptyState;
