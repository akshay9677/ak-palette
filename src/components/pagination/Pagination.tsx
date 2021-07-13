import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../buttons/Button";
import Text from "../typography/Text";
import "./pagination.scss";
import Container from "ui-box";

type PaginationProps = {
  page: number;
  perPage?: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  [prop: string]: any;
};

const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPages,
  onPageChange,
  ...rest
}): JSX.Element => {
  return (
    <Container
      {...rest}
      style={{ display: "flex", alignItems: "center" }}
      className="pal-pagination-container"
    >
      <Button
        appearance="secondary"
        onClick={onPageChange.bind(this, page - 1)}
        disabled={page === 1}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </Button>
      <Text style={{ padding: "0px 10px" }}>{page}</Text>
      <Button
        appearance="secondary"
        onClick={onPageChange.bind(this, page + 1)}
        disabled={page === totalPages}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </Button>
      <Text style={{ padding: "0px 5px" }}>of</Text>
      <Text style={{ padding: "0px 5px" }}>{totalPages}</Text>
    </Container>
  );
};

export default Pagination;
