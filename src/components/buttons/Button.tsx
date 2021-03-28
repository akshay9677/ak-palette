import React from "react";
import Spinner from "../spinner/Spinner";
import "./button.scss";

type ButtonProps = {
  children: React.ReactNode;
  appearance?: "primary" | "secondary" | "tertiary" | "link";
  uppercase?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  color?: string;
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  appearance,
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
