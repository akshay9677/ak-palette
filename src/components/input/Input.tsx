import React from "react";
import "./index.scss";
import Container from "ui-box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

type InputProps = {
  placeholder?: string;
  size?: "mini" | "small" | "large";
  disabled?: boolean;
  width?: number;
  isValid?: boolean;
  validationText?: string;
  [prop: string]: any;
};

const Input: React.FC<InputProps> = ({
  placeholder,
  size,
  disabled,
  width,
  isValid,
  validationText,
  ...rest
}): JSX.Element => {
  return (
    <Container width={width ? width : 300}>
      <input
        className={`pal-input-field ${size ? size : "small"} ${
          disabled ? "disabled" : ""
        } ${isValid ? "isValid" : ""}`}
        placeholder={placeholder}
        disabled={disabled}
        {...rest}
      />
      {isValid && (
        <span className="validate-text">
          <span style={{ paddingRight: "4px" }}>
            <FontAwesomeIcon icon={faExclamationCircle} />
          </span>
          {validationText}
        </span>
      )}
    </Container>
  );
};

export default Input;
