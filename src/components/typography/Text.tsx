import React from "react";
import Container from "ui-box";

import "./text.scss";

type TextProps = {
  children?: any;
  color?: string;
  size?:
    | "xxxlarge"
    | "xxlarge"
    | "xlarge"
    | "large"
    | "medium"
    | "normal"
    | "small";
  [prop: string]: any;
};

const SIZE_HASH = {
  xxxlarge: { fontSize: "33px", color: "#234361", fontWeight: 600 },
  xxlarge: { fontSize: "25px", color: "#234361", fontWeight: 600 },
  xlarge: { fontSize: "21px", color: "#234361", fontWeight: 500 },
  large: { fontSize: "17px", color: "#234361", fontWeight: 400 },
  medium: { fontSize: "15px", color: "#234361", fontWeight: 400 },
  normal: { fontSize: "13px", color: "#425a70", fontWeight: 400 },
  small: { fontSize: "11px", color: "#425a70", fontWeight: 400 },
};

const Text: React.FC<TextProps> = ({
  children,
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
      fontWeight={_getSizeBasedCss().fontWeight}
      color={color ? color : _getSizeBasedCss().color}
      {...rest}
    >
      {children}
    </Container>
  );
};

export default Text;
