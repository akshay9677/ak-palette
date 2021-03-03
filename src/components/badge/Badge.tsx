import React from "react";

import "./index.scss";

type BadgeProps = {
  label: string;
  color?: "green" | "red" | "blue" | "yellow" | "purple" | "default";
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
    backgroundColor: "#dbd9fc",
    color: "#5851FF",
  },
};

const Badge: React.FC<BadgeProps> = ({ label, color }): JSX.Element => {
  const _getBadgeColors = () => {
    let colors = color ? color : "default";
    return badgeColorHash[colors]
      ? badgeColorHash[colors]
      : badgeColorHash["default"];
  };
  return (
    <span style={_getBadgeColors()} className="pal-badge">
      {label}
    </span>
  );
};

export default Badge;
