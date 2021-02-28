import React from "react";
import "./index.scss";

type ButtonProps = {
  children: React.ReactNode;
  appearance?: "primary" | "secondary";
  size?: "mini" | "small" | "large";
  uppercase?: boolean;
  onClick?: () => void;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  appearance,
  size,
  uppercase,
  onClick,
  disabled,
  ...rest
}): JSX.Element => {
  return (
    <div className="pal-button">
      <button
        onClick={() => {
          if (!disabled && onClick) onClick();
        }}
        className={`pal-button-container 
    ${appearance ? appearance : "primary"}
     ${size ? size : "small"} 
     ${uppercase ? "uppercase" : ""}
     ${disabled && "disabled"}`}
        {...rest}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
