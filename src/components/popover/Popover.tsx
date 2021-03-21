import React, { useRef, useState } from "react";
import { createPopper } from "@popperjs/core";
import Container from "ui-box";

import "./index.scss";

type PopoverProps = {
  children: React.ReactNode;
  content: React.ReactNode;
  trigger?: "hover" | "click";
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
  hideArrow?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
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

const Popover: React.FC<PopoverProps> = ({
  children,
  content,
  placement,
  trigger,
  hideArrow,
  onClose,
  onOpen,
}): JSX.Element => {
  const [showPopover, setShowPopover] = useState(false);
  const popoverRef = useRef(null);

  const openPopover = (e: any): void => {
    const popoverContent = popoverRef.current;

    if (showPopover && onClose) onClose();
    else if (onOpen) onOpen();

    setShowPopover(!showPopover);
    if (e && e.target && popoverContent) {
      createPopper(e.target, popoverContent, {
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
  const _onClickOpen = (e: any): void => {
    if (trigger === "click" || !trigger) {
      openPopover(e);
    }
  };
  const _onHoverPopover = (e: any): void => {
    if (trigger === "hover") {
      openPopover(e);
    }
  };
  return (
    <div
      className="pal-popover"
      onClick={_onClickOpen}
      onMouseEnter={_onHoverPopover}
      onMouseLeave={_onHoverPopover}
    >
      <div id="pal-popover-parent">{children}</div>
      <div id="pal-popover-content" ref={popoverRef}>
        {showPopover && (
          <>
            <Container className="pal-popover-content-main">
              {content}
            </Container>
          </>
        )}

        {!hideArrow && (
          <div
            id="arrow"
            style={{ visibility: showPopover ? "visible" : "hidden" }}
            data-popper-arrow
          ></div>
        )}
      </div>
    </div>
  );
};

export default Popover;
