import React, { useState } from "react";
import Container from "ui-box";

import Radio from "../radio/Radio";
import { OptionProps } from "../select/Select";
import "./radiogroup.scss";
import Danger from "../../assets/icons/danger.svg";

type RadioGroupProps = {
  options?: Array<OptionProps>;
  onChange?: (value: any) => void;
  isHorizontal?: boolean;
  disabled?: boolean;
  value?: any;
  validationText?: string;
};

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  onChange,
  isHorizontal,
  value,
  disabled,
  validationText,
}): JSX.Element => {
  const [selectedItem, setSelectedValue] = useState(value);

  const _handleSelectionChange = (currItem: OptionProps): void => {
    setSelectedValue(currItem.value);
    if (onChange) onChange(currItem.value);
  };

  return (
    <div className="pal-radio-group-container">
      <Container
        display="inline-flex"
        flexDirection={isHorizontal ? "row" : "column"}
        justifyContent="center"
        alignItems="left"
      >
        {options &&
          options.map((option, index) => {
            return (
              <span
                key={index}
                style={{ paddingRight: isHorizontal ? "8px" : "0px" }}
              >
                <Radio
                  label={option.label}
                  checked={selectedItem === option.value}
                  onChange={_handleSelectionChange.bind(this, option)}
                  disabled={disabled}
                />
              </span>
            );
          })}
      </Container>
      {validationText && (
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

export default RadioGroup;
