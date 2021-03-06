import React, { useEffect, useRef, useState } from "react";

import Alert from "../alert/Alert";
import "./index.scss";


const VERTICAL_HASH={
  top:{top:'10px'},
  bottom:{bottom:'20px'}
}

const HORIZONTAL_HASH={
  center:{alignItems:'center'},
  left:{alignItems:'flex-start'},
  right:{alignItems:'flex-end'}
}

const Toaster = ({ onShow }) => {
  const [showToast, setShowToast] = useState(false);
  const [toastDetails,setToastDetails] = useState({})
  const timer = useRef(null);
  
  const toggleShow = (description,setting) => {
    setToastDetails({...setting,description,duration: setting.duration ? setting.duration : 5 })
    if (!showToast) {
      closeTimer();
      setShowToast(true);
    }
  };

  onShow(toggleShow);

  const closeTimer = () => {
    clearTimeout(timer.current);
    timer.current = null;
  };

  const startTimer = () => {
    closeTimer();
    timer.current = setTimeout(() => {
      setShowToast(false);
    },  toastDetails.duration * 1000);
  };

  useEffect(() => {
    startTimer();
    //eslint-disable
  }, [showToast]);

  const _getPositionHash = () => {
    let {horizontal,vertical} = toastDetails || {}
    let h = horizontal ? horizontal : 'center'
    let v = vertical ? vertical : 'top'

    let styleObject = {...VERTICAL_HASH[v],...HORIZONTAL_HASH[h]}
    return styleObject
  }

  return (
    <>
      {showToast && (
        <div className="pal-toast-container" style={_getPositionHash()}>
          <div style={{padding:'10px'}}>
          <Alert
            label={toastDetails.description}
            title={toastDetails.title}
            type={toastDetails.type || 'trial'}
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
