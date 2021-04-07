import React from "react";
import "./textarea.scss";
import Container from "ui-box";
import Danger from "../../assets/icons/danger.svg";

type TextAreaProps = {
  placeholder?: string;
  disabled?: boolean;
  width?: number;
  isInvalid?: boolean;
  validationText?: string;
  rows?: number;
  [prop: string]: any;
};

const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  disabled,
  width,
  isInvalid,
  validationText,
  rows,
  ...rest
}): JSX.Element => {
  return (
    <Container width={width ? width : 300}>
      <textarea
        className={`pal-text-area-field ${disabled ? "disabled" : ""} ${
          isInvalid ? "isInvalid" : ""
        }`}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        style={{
          fontSize: "13px",
          resize: "none",
        }}
        {...rest}
      />
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
    </Container>
  );
};

export default TextArea;
