import React from "react";
import Container from "ui-box";

import "./text.scss";

type TextProps = {
  label?: string;
  color?: string;
  size?: "heading" | "sub-heading";
  [prop: string]: any;
};

const SIZE_HASH = {
  heading: { fontSize: 18, color: "#1f4160" },
  "sub-heading": { fontSize: 15, color: "#1f4160" },
  normal: { fontSize: 13, color: "#425a70" },
};

const Text: React.FC<TextProps> = ({
  label,
  color,
  size,
  ...rest
}): JSX.Element => {
  const _getSizeBasedCss = () => {
    return SIZE_HASH[size ? size : "normal"];
  };
  return (
    <Container
      className="pal-typography"
      fontSize={_getSizeBasedCss().fontSize}
      fontWeight={size && 600}
      color={color ? color : _getSizeBasedCss().color}
      {...rest}
    >
      {label}
    </Container>
  );
};

export default Text;
