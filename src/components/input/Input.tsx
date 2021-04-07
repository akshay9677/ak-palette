import React from "react";
import "./input.scss";
import Container from "ui-box";
import Danger from "../../assets/icons/danger.svg";

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
  return `${(0.41 * height).toFixed()}px`;
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
        {prefix && (
          <Container
            maxWidth={40}
            paddingX="2px"
            display="flex"
            alignItems="center"
          >
            {prefix}
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

        {suffix && (
          <Container
            maxWidth={40}
            paddingX="2px"
            display="flex"
            alignItems="center"
          >
            {suffix}
          </Container>
        )}
      </Container>

      {isInvalid && validationText && (
        <span className="validate-text">
          <span style={{ paddingRight: "4px", display: "flex" }}>
            <img
              style={{ width: "10px", height: "10px" }}
              src={Danger}
              alt="danger-svg"
            />
          </span>
          {validationText}
        </span>
      )}
    </div>
  );
};

export default Input;
