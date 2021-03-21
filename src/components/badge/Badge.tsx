import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import "./index.scss";

type BadgeProps = {
  label: string;
  color?: "green" | "red" | "blue" | "yellow" | "purple" | "default";
  showClose?: boolean;
  onClose?: () => void;
};

const badgeColorHash = {
  default: {
    backgroundColor: "#EBEFF3",
    color: "#475967",
  },
  green: {
    backgroundColor: "#EAF7EE",
    color: "#3BC178",
  },
  red: {
    backgroundColor: "#FFDDE5",
    color: "#E25E5F",
  },
  blue: {
    backgroundColor: "#E5EFFA",
    color: "#2B5DC4",
  },
  yellow: {
    backgroundColor: "#FEF7E9",
    color: "#E96F25",
  },
  purple: {
    backgroundColor: "#EFF0FF",
    color: "#5851FF",
  },
};

const Badge: React.FC<BadgeProps> = ({
  label,
  color,
  showClose,
  onClose,
}): JSX.Element => {
  const _getBadgeColors = () => {
    let colors = color ? color : "default";
    return badgeColorHash[colors]
      ? badgeColorHash[colors]
      : badgeColorHash["default"];
  };
  return (
    <span style={_getBadgeColors()} className="pal-badge">
      {label}
      {showClose && (
        <span className="pal-badge-close" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </span>
      )}
    </span>
  );
};

export default Badge;
