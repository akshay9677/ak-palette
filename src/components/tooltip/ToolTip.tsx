import React, { useState } from "react";

import "./index.scss";
import Container from "ui-box";

type ToolTipProps = {
  children: React.ReactNode;
  label: string;
  position?: "top" | "bottom" | "left" | "right";
  width?: number;
};

const ToolTip: React.FC<ToolTipProps> = ({
  children,
  label,
  position,
  width,
}): JSX.Element => {
  const [showToolTip, setShowToolTip] = useState(false);
  const _positionHash = {
    left: {
      top: "-5px",
      right: "105%",
    },
    right: {
      top: "-5px",
      left: "105%",
    },
    top: {
      bottom: "90%",
      left: "50%",
      marginLeft: `-${width ? width / 2 : 60}px`,
    },
    bottom: {
      top: "90%",
      left: "50%",
      marginLeft: `-${width ? width / 2 : 60}px`,
    },
  };
  const _getPositionStyle = (): object => {
    let currPosition = position ? position : "bottom";

    return _positionHash[currPosition];
  };
  return (
    <div
      className="pal-tooltip-container"
      onMouseEnter={() => setShowToolTip(true)}
      onMouseLeave={() => setShowToolTip(false)}
    >
      {children}
      {showToolTip && (
        <Container
          width={width ? width : 120}
          className="pal-tooltip-text"
          style={_getPositionStyle()}
          margin="5px"
        >
          {label}
        </Container>
      )}
    </div>
  );
};

export default ToolTip;
