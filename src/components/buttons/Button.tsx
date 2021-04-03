import React from "react";
import Spinner from "../spinner/Spinner";
import "./button.scss";

type ButtonProps = {
  children: React.ReactNode;
  appearance?: "primary" | "secondary" | "tertiary" | "link";
  onClick?: () => void;
  disabled?: boolean;
  type?: "success" | "info" | "warning" | "danger" | "default";
  loading?: boolean;
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
    success: "#3BC178",
    info: "#0569ce",
    warning: "#E89F29",
    danger: "#E85A4B",
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
    <div className="pal-button">
      <button
        onClick={() => {
          if (!disabled && onClick) onClick();
        }}
        className={`pal-button-container 
    ${appearance ? appearance : "primary"}
     ${disabled && "disabled"}`}
        style={_getButtonCss()}
        {...rest}
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
    </div>
  );
};

export default Button;
