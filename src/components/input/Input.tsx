import React from "react";
import "./index.scss";
import Container from "ui-box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

type InputProps = {
  placeholder?: string;
  disabled?: boolean;
  width?: number;
  isInvalid?: boolean;
  validationText?: string;
  height?: number;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  [prop: string]: any;
};

const getTextSizeForControlHeight = (height: number) => {
  return `${(0.45 * height).toFixed()}px`;
};

const Input: React.FC<InputProps> = ({
  placeholder,
  disabled,
  width,
  isInvalid,
  validationText,
  height,
  prefix,
  suffix,
  ...rest
}): JSX.Element => {
  return (
    <div className="pal-input">
      <Container
        width={width ? width : 300}
        height={height && height >= 24 ? height : 32}
        position="relative"
        className={`pal-input-field-container ${isInvalid ? "isInvalid" : ""} ${
          disabled ? "disabled" : ""
        }`}
      >
        {suffix && (
          <Container maxWidth={40} paddingX="2px">
            {suffix}
          </Container>
        )}
        <input
          className="pal-input-field"
          placeholder={placeholder}
          disabled={disabled}
          style={{
            fontSize: getTextSizeForControlHeight(
              height && height >= 24 ? height : 32
            ),
          }}
          {...rest}
        />

        {prefix && (
          <Container maxWidth={40} paddingX="2px">
            {prefix}
          </Container>
        )}
      </Container>

      {isInvalid && validationText && (
        <span className="validate-text">
          <span style={{ paddingRight: "4px" }}>
            <FontAwesomeIcon icon={faExclamationCircle} />
          </span>
          {validationText}
        </span>
      )}
    </div>
  );
};

export default Input;
