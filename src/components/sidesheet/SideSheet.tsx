import React from "react";
import Container from "ui-box";
import "./sidesheet.scss";
import Text from "../typography/Text";

type SideSheetProps = {
  open: boolean;
  width?: number;
  onClose: () => void;
  children?: React.ReactNode;
  position?: "right" | "left";
  showClose?: boolean;
  header?: string;
};

const SideSheet: React.FC<SideSheetProps> = ({
  open,
  width,
  onClose,
  children,
  position,
  showClose,
  header,
}): JSX.Element => {
  const _handleOutsideClick = (e: any): void => {
    let clickedDiv = e.target.getAttribute("id");
    if (clickedDiv === "pal-side-sheet-main") onClose();
  };
  const _isRightPosition = (): boolean => {
    if (position && position === "left") return false;
    else return true;
  };
  return (
    <>
      {open && (
        <div
          style={{
            display: open ? "flex" : "none",
            justifyContent: _isRightPosition() ? "flex-end" : "flex-start",
          }}
          onClick={_handleOutsideClick}
          id="pal-side-sheet-main"
        >
          <div
            id="pal-side-sheet-child"
            className={
              _isRightPosition() ? "modal-entry-right" : "modal-entry-left"
            }
          >
            <Container
              width={width ? width : 500}
              height="100vh"
              zIndex={99999}
              backgroundColor={"#ffffff"}
              paddingX={20}
              paddingY={10}
            >
              {header && <Text size="large">{header}</Text>}
              {children}
            </Container>
          </div>
        </div>
      )}
    </>
  );
};

export default SideSheet;
