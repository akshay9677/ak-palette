import React from "react";
import "./index.scss";
import Spinner from "../spinner/Spinner";

type ButtonProps = {
  children: React.ReactNode;
  appearance?: "primary" | "secondary";
  size?: "mini" | "small" | "large";
  uppercase?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  color?: string;
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  appearance,
  size,
  uppercase,
  onClick,
  disabled,
  color,
  loading,
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
        style={
          color
            ? !appearance || appearance === "primary"
              ? { backgroundColor: `${color}` }
              : { color: `${color}` }
            : {}
        }
        {...rest}
      >
        {loading && (
          <Spinner
            size="small"
            color={appearance === "secondary" ? color : "white"}
          />
        )}
        {children}
      </button>
    </div>
  );
};

export default Button;
