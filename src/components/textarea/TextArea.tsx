import React from "react";
import "./index.scss";
import Container from "ui-box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

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
          <span style={{ paddingRight: "4px" }}>
            <FontAwesomeIcon icon={faExclamationCircle} />
          </span>
          {validationText}
        </span>
      )}
    </Container>
  );
};

export default TextArea;
