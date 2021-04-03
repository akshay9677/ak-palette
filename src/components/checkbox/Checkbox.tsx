import React, { useState } from "react";
import "./checkbox.scss";
import Text from "../typography/Text";

type CheckBoxProps = {
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  checked: boolean;
};

const CheckBox: React.FC<CheckBoxProps> = ({
  onChange,
  disabled,
  label,
  checked,
  ...rest
}): JSX.Element => {
  const [_checked, setChecked] = useState(checked ? checked : false);
  const handleChange = () => {
    onChange(!_checked);
    setChecked(!_checked);
  };
  return (
    <label
      className={`pal-checkbox-container ${
        disabled ? "pal-checkbox-disabled" : ""
      }`}
      {...rest}
    >
      <input
        type="checkbox"
        checked={!disabled ? _checked : false}
        onChange={handleChange}
        disabled={disabled}
      />
      <span className="checkmark"></span>
      <Text opacity={disabled && 0.5}>{label}</Text>
    </label>
  );
};

export default CheckBox;
