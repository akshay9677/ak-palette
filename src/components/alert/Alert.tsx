import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../spinner/Spinner";
import Text from "../typography/Text";
import Button from "../buttons/Button";
import { _getAlertTypeStyle, _getIcon } from "../../utils/intent";

import "./alert.scss";

type AlertProps = {
  label: string;
  title?: string;
  type?: "success" | "info" | "warning" | "danger" | "default";
  onClose?: () => void;
  showLoading?: boolean;
};

const Alert: React.FC<AlertProps> = ({
  label,
  type,
  title,
  onClose,
  showLoading,
}): JSX.Element => {
  return (
    <div
      className="pal-alert-container"
      style={{ ..._getAlertTypeStyle(type), color: "#425a70" }}
    >
      <div className="pal-alert-main">
        <span
          className="pal-alert-primary-icon"
          style={{ color: _getAlertTypeStyle(type).color }}
        >
          <FontAwesomeIcon icon={_getIcon(type)} />
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
              <FontAwesomeIcon icon={faTimes} />
            </Button>
          ) : (
            <Spinner color={_getAlertTypeStyle(type).color} />
          )}
        </div>
      )}
    </div>
  );
};

export default Alert;
