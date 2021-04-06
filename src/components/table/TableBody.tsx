import React from "react";
import Container from "ui-box";

type TableBodyProps = {
  children?: React.ReactNode;
  height?: number;
};

const TableBody: React.FC<TableBodyProps> = ({
  children,
  height,
}): JSX.Element => {
  return (
    <Container height={height ? height : "100%"} overflow="scroll">
      {children}
    </Container>
  );
};

export default TableBody;
