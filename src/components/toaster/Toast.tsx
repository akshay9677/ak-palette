import React from "react";

import ReactDOM from "react-dom";
import Toaster from "./Toaster";

class Toast {
  constructor() {
    if (Boolean(typeof window !== "undefined" && window.document)) {
      const container = document.createElement("div");
      container.setAttribute("pal-toaster-main", "");
      document.body.appendChild(container);

      ReactDOM.render(
        <Toaster onShow={this._onShow} key={this.key} />,
        container
      );
    }
  }
  key = 0;
  _toggleShow: any;
  _onShow = (toggleShow: any) => {
    this._toggleShow = toggleShow;
  };
  default = (description: any, settings: any) => {
    return this._toggleShow(description, { ...settings, type: "default" });
  };
  success = (description: any, settings: any) => {
    return this._toggleShow(description, { ...settings, type: "success" });
  };
  info = (description: any, settings: any) => {
    return this._toggleShow(description, { ...settings, type: "info" });
  };
  danger = (description: any, settings: any) => {
    return this._toggleShow(description, { ...settings, type: "danger" });
  };
  warning = (description: any, settings: any) => {
    return this._toggleShow(description, { ...settings, type: "warning" });
  };
}

const toast = new Toast();

export default toast;
