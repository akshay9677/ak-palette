import React from "react";
import Container from "ui-box";

type TableRowProps = {
  children?: React.ReactNode;
};

const TableRow: React.FC<TableRowProps> = ({ children }): JSX.Element => {
  return (
    <Container display="flex" flexDirection="row">
      {children}
    </Container>
  );
};

export default TableRow;
