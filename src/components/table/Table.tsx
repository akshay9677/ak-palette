import React from "react";
import Container from "ui-box";

import TableRow from "./TableRow";
import TableCell from "./TableCell";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import "./table.scss";

type TableProps = {
  children?: React.ReactNode;
  width?: number;
};

const Table = (props: TableProps): JSX.Element => {
  let { children, width } = props;
  return (
    <Container
      display="inline-flex"
      flexDirection="column"
      border="solid 1px #E4E7EB"
      className="pal-table-container"
      width={width ? width : "100%"}
    >
      {children}
    </Container>
  );
};

Table.Row = TableRow;
Table.Cell = TableCell;
Table.Head = TableHead;
Table.Body = TableBody;

export default Table;
