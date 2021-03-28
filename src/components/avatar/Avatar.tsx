import React from "react";
import "./avatar.scss";
import Container from "ui-box";

type AvatarProps = {
  label: string;
  filled?: boolean;
  size?: number;
  src?: string;
};

const isObjectFitSupported =
  typeof document !== "undefined" &&
  "objectFit" in document.documentElement.style;

const SOLID_COLOR_HASH = [
  "#DF3511",
  "#048759",
  "#03A3C0",
  "#1A2A4D",
  "#FF9A20",
  "#5851FF",
];

const NON_SOLID_COLOR_HASH = [
  "#fdd6d0",
  "#c0f9d9",
  "#ccf2f4",
  "#eae9e9",
  "#fff0d6",
  "#dddcff",
];

const Avatar: React.FC<AvatarProps> = ({
  label,
  filled,
  size,
  src,
}): JSX.Element => {
  const _getLabel = (): string => {
    if (label) {
      let arraySplits = label.split(" ");
      let secondChar;
      let firstChar = arraySplits[0].charAt(0).toUpperCase();
      if (arraySplits[1]) secondChar = arraySplits[1].charAt(0).toUpperCase();
      return `${firstChar}${secondChar ? secondChar : ""}`;
    } else {
      return "";
    }
  };
  const _getColor = (isTextColor: boolean): string => {
    let userKey = label;
    if (label) {
      let userUniqueNum = Array.from(userKey)
        .map((letter) => letter.charCodeAt(0))
        .reduce((current, previous) => previous + current);
      let colorIndex = userUniqueNum % 6;
      if (!isTextColor) {
        return filled
          ? SOLID_COLOR_HASH[colorIndex]
          : NON_SOLID_COLOR_HASH[colorIndex];
      } else {
        return !filled ? SOLID_COLOR_HASH[colorIndex] : "#ffffffff";
      }
    } else {
      return "red";
    }
  };
  return (
    <Container
      width={size ? size : 40}
      height={size ? size : 40}
      overflow="hidden"
      borderRadius={9999}
      position="relative"
      display="inline-flex"
      flexShrink={0}
      justifyContent="center"
      alignItems="center"
      backgroundColor={_getColor(false)}
      color={_getColor(true)}
    >
      {src ? (
        <Container
          is="img"
          style={{ objectFit: "cover" }} // Unsupported by ui-box directly
          width={isObjectFitSupported ? "100%" : "auto"} // Fallback to old behaviour on IE
          height="100%"
          src={src}
        />
      ) : (
        <span className="pal-avatar-font">{_getLabel()}</span>
      )}
    </Container>
  );
};

export default Avatar;
