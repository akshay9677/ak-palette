import React, { useEffect, useState } from "react";

import Select from "../select/Select";
import moment from "moment";
import Container from "ui-box";

import Clock from "./clock.svg";

type TimePicker = {
  placeholder?: string;
  width?: number;
  height?: number;
  disabled?: boolean;
  isInvalid?: boolean;
  validationText?: string;
  startTime?: string;
  endTime?: string;
  step?: number;
  clearable?: boolean;
  is12Hour?: boolean;
  isDoc?: boolean;
};

const TimePicker: React.FC<TimePicker> = ({
  placeholder,
  width,
  height,
  disabled,
  isInvalid,
  validationText,
  startTime,
  endTime,
  step,
  clearable,
  is12Hour,
  isDoc,
}): JSX.Element => {
  const [options, setOptions] = useState<any>();
  useEffect(() => {
    if (startTime && endTime) {
      let format = !is12Hour && startTime && endTime ? "HH:mm" : "hh:mm a";
      let start = moment(startTime || "00:00", format);
      let end = moment(endTime || "12:00", format);
      let currStep = step ? step : 60;

      if (end.isBefore(startTime)) {
        end.add(1, "day");
      }

      let timeStops = [];

      while (start <= end) {
        let time = moment(start).format(format);
        if (time) timeStops.push({ label: time, value: time });
        start.add(currStep, "minutes");
      }
      if (timeStops) setOptions(timeStops);
    }
  }, []);
  return (
    <Select
      placeholder={placeholder}
      width={width ? width : 150}
      height={height}
      disabled={disabled}
      isInvalid={isInvalid}
      validationText={validationText}
      options={options}
      clearable={clearable}
      icon={
        <img
          style={{
            width: "14px",
            height: "14px",
          }}
          src={isDoc ? "/img/clock.svg" : Clock}
          alt="clock-svg"
        />
      }
    />
  );
};

export default TimePicker;
