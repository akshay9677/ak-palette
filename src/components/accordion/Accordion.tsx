import React from "react";
import Container from "ui-box";
import AccordianItem from "./AccordianItem";

type AccordianProps = {
  children?: React.ReactNode;
};

const Accordion = (props: AccordianProps): JSX.Element => {
  let { children } = props;
  return (
    <Container border="solid 1px #d8dae5" borderRadius={5} borderBottom="none">
      {children}
    </Container>
  );
};

Accordion.Item = AccordianItem;

export default Accordion;
