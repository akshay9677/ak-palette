import React from "react";

import "./index.scss";

interface SpinnerProps {
  size?: "small" | "medium" | "large" | "default";
  color?: string;
}

const sizeHash = {
  small: 12,
  default: 20,
  medium: 24,
  large: 36,
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
      className={`spinner ${size}`}
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
