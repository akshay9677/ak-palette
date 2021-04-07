import React from "react";
import Spinner from "../spinner/Spinner";
import Text from "../typography/Text";
import Button from "../buttons/Button";

import "./alert.scss";
import Success from "./svg/success.svg";
import Default from "./svg/default.svg";
import Info from "./svg/info.svg";
import Danger from "../../assets/icons/danger.svg";
import Warning from "./svg/warning.svg";
import CloseIcon from "../../assets/icons/close.svg";

type AlertProps = {
  label: string;
  title?: string;
  type?: "success" | "info" | "warning" | "danger" | "default";
  onClose?: () => void;
  showLoading?: boolean;
};

const _colorHash = {
  success: {
    // backgroundColor: "#EAF7EE",
    borderLeft: "solid 6px #3BC178",
    color: "#3BC178",
  },
  info: {
    // backgroundColor: "#E5F2FD",
    borderLeft: "solid 6px #0569ce",
    color: "#0569ce",
  },
  warning: {
    // backgroundColor: "#FEF7E9",
    borderLeft: "solid 6px #E89F29",
    color: "#E89F29",
  },
  danger: {
    // backgroundColor: "#FFDDE5",
    borderLeft: "solid 6px #E85A4B",
    color: "#E85A4B",
  },
  default: {
    // backgroundColor: "#EBEFF3",
    borderLeft: "solid 6px #475967",
    color: "#475967",
  },
};

const _iconHash = {
  success: Success,
  info: Info,
  warning: Warning,
  danger: Danger,
  default: Default,
};

const Alert: React.FC<AlertProps> = ({
  label,
  type,
  title,
  onClose,
  showLoading,
}): JSX.Element => {
  const _getAlertType = () => {
    return type ? type : "default";
  };
  const _getAlertTypeStyle = () => {
    let colors = _getAlertType();
    return _colorHash[colors];
  };
  const _getIcon = () => {
    let currType = _getAlertType();
    return _iconHash[currType];
  };
  return (
    <div
      className="pal-alert-container"
      style={{ ..._getAlertTypeStyle(), color: "#425a70" }}
    >
      <div className="pal-alert-main">
        <span
          className="pal-alert-primary-icon"
          style={{ color: _getAlertTypeStyle().color, display: "flex" }}
        >
          <img
            style={{ width: "15px", height: "15px" }}
            src={_getIcon()}
            alt="type-symbol"
          />
        </span>
        <div>
          <Text size="medium">{title}</Text>
          <Text>{label}</Text>
        </div>
      </div>
      {(onClose || showLoading) && (
        <div className="pal-alert-secondary-container">
          {!showLoading ? (
            <Button
              appearance="tertiary"
              onClick={() => {
                onClose && onClose();
              }}
              type="default"
            >
              <img
                style={{ width: "8px", height: "8px" }}
                src={CloseIcon}
                alt="close-svg"
              />
            </Button>
          ) : (
            <Spinner color={_colorHash[_getAlertType()].color} />
          )}
        </div>
      )}
    </div>
  );
};

export default Alert;
