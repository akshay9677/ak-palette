import React from "react";
import Container from "ui-box";
import Spinner from "../spinner/Spinner";
import "./button.scss";

type ButtonProps = {
  children: React.ReactNode;
  appearance?: "primary" | "secondary" | "tertiary" | "link";
  onClick?: () => void;
  disabled?: boolean;
  type?: "success" | "info" | "warning" | "danger" | "default";
  loading?: boolean;
  [prop: string]: any;
};

const Button: React.FC<ButtonProps> = ({
  children,
  appearance,
  onClick,
  disabled,
  type,
  loading,
  ...rest
}): JSX.Element => {
  const _colorHash = {
    success: "#52BD95",
    info: "#2952cc",
    warning: "#E89F29",
    danger: "#D04443",
    default: "#475967",
  };

  const _getButtonCss = (): object => {
    let buttonColor = type ? _colorHash[type] : _colorHash["info"];

    if (appearance) {
      return appearance !== "link"
        ? appearance === "primary"
          ? { backgroundColor: buttonColor, color: "white" }
          : { color: buttonColor }
        : {};
    } else {
      return { backgroundColor: buttonColor, color: "white" };
    }
  };

  return (
    <Container {...rest} className="pal-button">
      <button
        onClick={() => {
          if (!disabled && onClick) onClick();
        }}
        className={`pal-button-container 
    ${appearance ? appearance : "primary"}
     ${disabled && "disabled"}`}
        style={_getButtonCss()}
      >
        {loading && (
          <>
            <Spinner
              size="small"
              color={
                appearance === "primary"
                  ? "white"
                  : _colorHash[type ? type : "info"]
              }
            />
            <span style={{ paddingRight: "6px" }}></span>
          </>
        )}
        {children}
      </button>
    </Container>
  );
};

export default Button;
