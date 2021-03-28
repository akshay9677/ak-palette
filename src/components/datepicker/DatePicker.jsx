import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Input from "../input/Input";
import Calendar from './calendar.svg'
import './datepicker.scss'


const DatePickers = ({
  placeholder,
  width,
  height,
  disabled,
  isInvalid,
  validationText,
  value,
  onChange,
  isDoc
}) => {
  const [startDate, setStartDate] = useState(value ? value : null);
  const InputDate = forwardRef(({ value, onClick }, ref) => {
    return <Input ref={ref} value={value} onClick={onClick} 
    placeholder={placeholder}
    width={width ? width : 150}
    height={height}
    disabled={disabled}
    isInvalid={isInvalid}
    validationText={validationText} 
    prefix={
      <img
        style={{
          width: "14px",
          height: "14px",
        }}
        src={isDoc ? '/img/calendar.svg' : Calendar}
        alt="calendar-svg"
      />} onChange={()=>{}} />
  });
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => {
        setStartDate(date)
        if(onChange) onChange(date)
      }}
      customInput={<InputDate />}
    />
  );
};

export default DatePickers;
