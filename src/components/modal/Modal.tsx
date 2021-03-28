import React from "react";

import "./modal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from "../buttons/Button";
import Text from "../typography/Text";

type ModalProps = {
  open: boolean;
  header?: string;
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
  onClose: () => void;
  onConfirm?: () => void;
  primaryButton?: { name?: string; color?: string };
  secondaryButton?: { name?: string; color?: string };
  hideFooter?: boolean;
};

const _sizeHash = {
  small: "424px",
  medium: "512px",
  large: "800px",
};

const Modal: React.FC<ModalProps> = ({
  open,
  header,
  size,
  children,
  onClose,
  onConfirm,
  primaryButton,
  secondaryButton,
  hideFooter,
}): JSX.Element => {
  const _getWidth = (): string => {
    let currSize = size ? size : "medium";
    let finalSize = Object.keys(_sizeHash).includes(currSize)
      ? currSize
      : "medium";

    return _sizeHash[finalSize];
  };
  const _handleOutsideClick = (e: any): void => {
    let divClassName = e.target.getAttribute("class");
    if (divClassName === "pal-modal") onClose();
  };
  return (
    <>
      {open && (
        <div
          style={{ display: open ? "flex" : "none" }}
          className="pal-modal"
          onClick={_handleOutsideClick}
        >
          <div className="pal-modal-container" style={{ width: _getWidth() }}>
            <div className="pal-modal-header">
              <Text size="heading" label={header} />
              <div onClick={onClose} className="pal-close-btn">
                <FontAwesomeIcon icon={faTimes} />
              </div>
            </div>
            <div className="pal-modal-body">{children}</div>
            {!hideFooter && (
              <div className="pal-modal-footer">
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <div style={{ paddingRight: "15px" }}>
                    <Button
                      appearance="secondary"
                      color={(secondaryButton || {}).color}
                      onClick={onClose}
                    >
                      {(secondaryButton || {}).name
                        ? (secondaryButton || {}).name
                        : "Cancel"}
                    </Button>
                  </div>
                  <Button
                    color={(primaryButton || {}).color}
                    onClick={onConfirm}
                  >
                    {(primaryButton || {}).name
                      ? (primaryButton || {}).name
                      : "Confirm"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
