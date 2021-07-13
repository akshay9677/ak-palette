import React from "react";

import "./spinner.scss";

interface SpinnerProps {
  size?: "small" | "medium" | "large" | "default";
  color?: string;
  [prop: string]: any;
}

const sizeHash = {
  small: 12,
  default: 24,
  medium: 32,
  large: 44,
};

const Spinner: React.FC<SpinnerProps> = ({
  size,
  color,
  ...rest
}): JSX.Element => {
  const getDimensions = () => {
    let currSize = size ? size : "default";
    return sizeHash[currSize];
  };
  return (
    <svg
      {...rest}
      className={`spinner`}
      style={{
        width: `${getDimensions()}px`,
        height: `${getDimensions()}px`,
      }}
      viewBox={`0 0 50 50`}
    >
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="5"
        style={{ stroke: `${color ? color : ""}` }}
      ></circle>
    </svg>
  );
};

export default Spinner;
