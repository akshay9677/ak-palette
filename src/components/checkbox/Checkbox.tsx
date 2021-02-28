import React, { useState } from "react";
import "./index.scss";

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
  const [_checked, setChecked] = useState(checked);
  const handleChange = () => {
    setChecked(!_checked);
    onChange(!_checked);
  };
  return (
    <label
      className={`pal-checkbox-container ${disabled ? "disabled" : ""}`}
      {...rest}
    >
      <input
        type="checkbox"
        checked={!disabled ? _checked : false}
        onChange={handleChange}
        disabled={disabled}
      />
      <span className="checkmark"></span>
      {label && <span className="label">{label}</span>}
    </label>
  );
};

export default CheckBox;
