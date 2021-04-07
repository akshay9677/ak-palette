import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";

import Input from "../input/Input";
import Calendar from "./calendar.svg";
import "./react-datepicker.css";
import "./datepicker.scss";

type DatePickerProps = {
  placeholder?: string;
  width?: number;
  height?: number;
  disabled?: boolean;
  isInvalid?: boolean;
  validationText?: string;
  value?: any;
  onChange?: (date: any) => void;
};

const DatePickers: React.FC<DatePickerProps> = ({
  placeholder,
  width,
  height,
  disabled,
  isInvalid,
  validationText,
  value,
  onChange,
}) => {
  const [startDate, setStartDate] = useState(value ? value : null);
  const InputDate = forwardRef((values: any, ref: any) => {
    let { value, onClick } = values;
    return (
      <Input
        ref={ref}
        value={value}
        onClick={onClick}
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
            src={Calendar}
            alt="calendar-svg"
          />
        }
        onChange={() => {}}
      />
    );
  });
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => {
        setStartDate(date);
        if (onChange) onChange(date);
      }}
      customInput={<InputDate />}
    />
  );
};

export default DatePickers;
