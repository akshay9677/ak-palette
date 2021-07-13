import React, { useEffect, useRef, useState } from "react";

import Alert from "../alert/Alert";
import "./toaster.scss";

interface VerticalType {
  top: Object;
  bottom: Object;
}

const VERTICAL_HASH: VerticalType = {
  top: { top: "10px" },
  bottom: { bottom: "20px" },
};

interface HorizontalType {
  center: Object;
  right: Object;
  left: Object;
}

const HORIZONTAL_HASH: HorizontalType = {
  center: { alignItems: "center" },
  left: { alignItems: "flex-start" },
  right: { alignItems: "flex-end" },
};

type ToasterProps = {
  onShow?: (toggleShow: any) => void;
  [prop: string]: any;
};

type ToastDetailsType = {
  duration: number;
  description: string;
  vertical?: "top" | "bottom";
  horizontal?: "center" | "right" | "left";
  title?: string;
  showLoading?: boolean;
  type?: "success" | "info" | "warning" | "danger" | "default";
};

const Toaster: React.FC<ToasterProps> = ({ onShow, ...rest }): JSX.Element => {
  const [showToast, setShowToast] = useState(false);
  const [toastDetails, setToastDetails] = useState<ToastDetailsType>({
    duration: 5,
    description: "This is a sample text",
  });
  const timer = useRef<any>(null);

  const toggleShow: any = (description: any, setting: any) => {
    setToastDetails({
      ...setting,
      description,
      duration: setting.duration ? setting.duration : 5,
    });
    if (!showToast) {
      closeTimer();
      setShowToast(true);
    }
  };

  if (onShow) onShow(toggleShow);

  const closeTimer = () => {
    clearTimeout(timer.current);
  };

  const startTimer = () => {
    closeTimer();
    timer.current = setTimeout(() => {
      setShowToast(false);
    }, toastDetails.duration * 1000);
  };

  useEffect(() => {
    startTimer();
    //eslint-disable
  }, [showToast]);

  const _getPositionHash = () => {
    let { horizontal, vertical } = toastDetails || {};

    let h: keyof HorizontalType = horizontal ? horizontal : "center";
    let v: keyof VerticalType = vertical ? vertical : "top";

    let styleObject: object = { ...VERTICAL_HASH[v], ...HORIZONTAL_HASH[h] };
    return styleObject;
  };

  return (
    <>
      {showToast && (
        <div className="pal-toast-container" style={_getPositionHash()}>
          <div style={{ padding: "10px" }}>
            <Alert
              {...rest}
              label={toastDetails.description}
              title={toastDetails.title}
              type={toastDetails.type || "info"}
              showLoading={toastDetails.showLoading || false}
              onClose={() => {
                setShowToast(false);
                closeTimer();
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Toaster;
