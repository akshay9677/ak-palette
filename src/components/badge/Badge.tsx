import React from "react";

import CloseIcon from "../../assets/icons/close.svg";

import "./badge.scss";

type BadgeProps = {
  label: string;
  color?: "green" | "red" | "blue" | "yellow" | "purple" | "default";
  showClose?: boolean;
  onClose?: () => void;
  [prop: string]: any;
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
  ...rest
}): JSX.Element => {
  const _getBadgeColors = () => {
    let colors = color ? color : "default";
    return badgeColorHash[colors]
      ? badgeColorHash[colors]
      : badgeColorHash["default"];
  };
  return (
    <span {...rest} style={_getBadgeColors()} className="pal-badge">
      {label}
      {showClose && (
        <span className="pal-badge-close" onClick={onClose}>
          <svg
            height="7px"
            viewBox="0 0 365.696 365.696"
            width="7px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0"
            />
          </svg>
        </span>
      )}
    </span>
  );
};

export default Badge;
