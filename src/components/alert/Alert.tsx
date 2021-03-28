import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faInfoCircle,
  faExclamationCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Spinner from "../spinner/Spinner";
import Text from "../typography/Text";

import "./alert.scss";

type AlertProps = {
  label: string;
  title?: string;
  type?: "success" | "info" | "warning" | "danger" | "default";
  onClose?: () => void;
  showLoading?: boolean;
};

const _colorHash = {
  success: {
    backgroundColor: "#EAF7EE",
    borderLeft: "solid 6px #3BC178",
    color: "#3BC178",
  },
  info: {
    backgroundColor: "#E5F2FD",
    borderLeft: "solid 6px #3E84E5",
    color: "#3E84E5",
  },
  warning: {
    backgroundColor: "#FEF7E9",
    borderLeft: "solid 6px #E89F29",
    color: "#E89F29",
  },
  danger: {
    backgroundColor: "#FFDDE5",
    borderLeft: "solid 6px #E85A4B",
    color: "#E85A4B",
  },
  default: {
    backgroundColor: "#EBEFF3",
    borderLeft: "solid 6px #475967",
    color: "#475967",
  },
};

const _iconHash = {
  success: faCheckCircle,
  info: faInfoCircle,
  warning: faExclamationCircle,
  danger: faExclamationCircle,
  default: faInfoCircle,
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
    <div className="pal-alert-container" style={_getAlertTypeStyle()}>
      <div className="pal-alert-main">
        <span className="pal-alert-primary-icon">
          <FontAwesomeIcon icon={_getIcon()} />
        </span>
        <div>
          <Text size="sub-heading" color={"inherit"} label={title} />
          <Text fontSize={14} label={label} color={"inherit"} />
        </div>
      </div>
      {(onClose || showLoading) && (
        <div
          className="pal-alert-secondary-container"
          onClick={() => {
            onClose && onClose();
          }}
        >
          {!showLoading ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <Spinner color={_colorHash[_getAlertType()].color} />
          )}
        </div>
      )}
    </div>
  );
};

export default Alert;
