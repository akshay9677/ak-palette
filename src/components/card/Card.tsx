import React from "react";
import Container from "ui-box";

import "./card.scss";
import Text from "../typography/Text";

type CardProps = {
  header?: string;
  children?: React.ReactNode;
  width?: number;
  footer?: React.ReactNode;
  src?: string;
};

const isObjectFitSupported =
  typeof document !== "undefined" &&
  "objectFit" in document.documentElement.style;

const Card: React.FC<CardProps> = ({
  header,
  children,
  width,
  footer,
  src,
}): JSX.Element => {
  return (
    <Container width={width ? width : 300} className="pal-card">
      {src && (
        <Container
          is="img"
          style={{ objectFit: "cover" }} // Unsupported by ui-box directly
          minWidth={isObjectFitSupported ? "100%" : "auto"} // Fallback to old behaviour on IE
          height="100%"
          src={src}
        />
      )}
      {header && (
        <Text paddingX={10} paddingY={5} size="large">
          {header}
        </Text>
      )}
      {children && (
        <Container
          paddingX={10}
          paddingTop={5}
          paddingBottom={10}
          fontSize={13}
          color={"#425a70"}
        >
          {children}
        </Container>
      )}
      {footer && <div className="pal-card-footer">{footer}</div>}
    </Container>
  );
};

export default Card;
