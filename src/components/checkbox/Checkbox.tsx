import React, { useState } from "react";
import "./index.scss";

interface CheckBoxProps {
  onChange:(checked:boolean)=>void
  disabled?:boolean
}

const CheckBox: React.FC<CheckBoxProps> = ({onChange,disabled,...rest}): JSX.Element => {
  const [checked, setChecked] = useState(true);
  const handleChange = () => {
    setChecked(!checked)
    onChange(checked)
    
  }
  return (
    <label className={`container ${disabled ? 'disabled' : ''}`} {...rest}>
      <input type="checkbox" onChange={handleChange} disabled={disabled} />
      <span className="checkmark"></span>
    </label>
  );
};

export default CheckBox;
