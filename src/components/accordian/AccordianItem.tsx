import React, { useState } from "react";
import Container from "ui-box";
import Text from "../typography/Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import "./accordian.scss";

type AccordianItemProps = {
  children?: React.ReactNode;
  header: String;
  key?: number;
  active?: boolean;
};

const AccordianItem: React.FC<AccordianItemProps> = ({
  children,
  header,
  key,
  active,
}): JSX.Element => {
  const [_isOpen, _setIsOpen] = useState(active ? true : false);
  return (
    <Container borderBottom="solid 1px #d8dae5" borderRadius={5} key={key}>
      <Container
        display="flex"
        alignItems="center"
        cursor="pointer"
        onClick={() => _setIsOpen(!_isOpen)}
        padding={10}
      >
        <Container
          width={20}
          display="flex"
          alignItems="center"
          color="#435A70"
        >
          <FontAwesomeIcon
            size="xs"
            icon={_isOpen ? faChevronDown : faChevronRight}
          />
        </Container>
        <Text size="large">{header}</Text>
      </Container>
      <div className="pal-accordian-content" aria-expanded={!_isOpen}>
        <Container paddingBottom={10} paddingLeft={32}>
          {children}
        </Container>
      </div>
    </Container>
  );
};

export default AccordianItem;
