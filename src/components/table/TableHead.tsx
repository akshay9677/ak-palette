import React from "react";
import Container from "ui-box";
import palette from "../../foundations/palette";

type TableHeadProps = {
  children?: React.ReactNode;
};

const TableHead: React.FC<TableHeadProps> = ({ children }): JSX.Element => {
  return (
    <Container
      display="flex"
      flexDirection="row"
      backgroundColor={palette.grey.secondary}
    >
      {children}
    </Container>
  );
};

export default TableHead;
