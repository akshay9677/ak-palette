import React from "react";
import Container from "ui-box";

type TableHeadProps = {
  children?: React.ReactNode;
};

const TableHead: React.FC<TableHeadProps> = ({ children }): JSX.Element => {
  return (
    <Container display="flex" flexDirection="row" backgroundColor="#F3F6FF">
      {children}
    </Container>
  );
};

export default TableHead;
