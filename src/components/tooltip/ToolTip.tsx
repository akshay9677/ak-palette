import React, { useRef, useState } from "react";
import { createPopper } from "@popperjs/core";

import "./tooltip.scss";
import Container from "ui-box";

type ToolTipProps = {
  children: React.ReactNode;
  label: string;
  placement?:
    | "right"
    | "right-start"
    | "right-end"
    | "top"
    | "top-start"
    | "top-end"
    | "left"
    | "left-start"
    | "left-end"
    | "bottom"
    | "bottom-start"
    | "bottom-end";
  width?: number;
};

const PLACEMENT_HASH = [
  "right",
  "right-start",
  "right-end",
  "top",
  "top-start",
  "top-end",
  "left",
  "left-start",
  "left-end",
  "bottom",
  "bottom-start",
  "bottom-end",
];

const ToolTip: React.FC<ToolTipProps> = ({
  children,
  label,
  placement,
  width,
}): JSX.Element => {
  const [showToolTip, setShowToolTip] = useState(false);
  const toolTipRef = useRef(null);
  const onHoverTooltip = (e: any): void => {
    let toolTipContent = toolTipRef.current;
    setShowToolTip(!showToolTip);
    if (e.target && toolTipContent) {
      createPopper(e.target, toolTipContent, {
        placement:
          placement && PLACEMENT_HASH.includes(placement)
            ? placement
            : "bottom",
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, 1],
            },
          },
        ],
      });
    }
  };
  return (
    <div
      className="pal-tooltip-container"
      onMouseEnter={onHoverTooltip}
      onMouseLeave={onHoverTooltip}
    >
      {children}
      <div ref={toolTipRef} id="pal-tooltip-content">
        {showToolTip && (
          <Container
            width={width ? width : 120}
            className="pal-tooltip-text"
            margin="5px"
          >
            {label}
          </Container>
        )}
      </div>
    </div>
  );
};

export default ToolTip;
