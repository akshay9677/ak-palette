import {
  faCheckCircle,
  faInfoCircle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";

const _getAlertType = (type) => {
  return type ? type : "default";
};
export const _getAlertTypeStyle = (type) => {
  let colors = _getAlertType(type);
  return _colorHash[colors];
};
export const _getIcon = (type) => {
  let currType = _getAlertType(type);
  return _iconHash[currType];
};

const _colorHash = {
  success: {
    // backgroundColor: "#EAF7EE",
    borderLeft: "solid 6px #52BD95",
    color: "#52BD95",
  },
  info: {
    // backgroundColor: "#E5F2FD",
    borderLeft: "solid 6px #2952cc",
    color: "#2952cc",
  },
  warning: {
    // backgroundColor: "#FEF7E9",
    borderLeft: "solid 6px #E89F29",
    color: "#E89F29",
  },
  danger: {
    // backgroundColor: "#FFDDE5",
    borderLeft: "solid 6px #D04443",
    color: "#D04443",
  },
  default: {
    // backgroundColor: "#EBEFF3",
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
