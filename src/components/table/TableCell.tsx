import React from "react";
import Container from "ui-box";

type TableCellProps = {
  children?: React.ReactNode;
  width?: number;
  align?: "center" | "left" | "right";
};

const TableRow: React.FC<TableCellProps> = ({
  children,
  width,
  align,
}): JSX.Element => {
  const _getContentAlignment = (): string => {
    if (align === "center") return "center";
    else if (align === "right") return "flex-end";
    else return "flex-start";
  };
  return (
    <Container
      width={width ? width : 200}
      padding={10}
      display="flex"
      alignItems="center"
      borderBottom="solid 1px #E4E7EB"
      overflow="hidden"
      justifyContent={_getContentAlignment()}
    >
      {children}
    </Container>
  );
};

export default TableRow;
