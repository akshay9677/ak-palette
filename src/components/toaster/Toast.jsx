import React from "react";

import ReactDOM from "react-dom";
import Toaster from "./Toaster";

class Toast {
  constructor() {
    const container = document.createElement("div");
    container.setAttribute('pal-toaster-main', '')
    document.body.appendChild(container);

    ReactDOM.render(<Toaster onShow={this._onShow} key={this.key} />, container);
  }
  key = 0
  _onShow = (toggleShow) => {
    this._toggleShow = toggleShow;
  };
  default = (description,settings) => {
    return this._toggleShow(description,{...settings,type:'default'});
  };
  success = (description,settings) => {
    return this._toggleShow(description,{...settings,type:'success'});
  };
  info = (description,settings) => {
    return this._toggleShow(description,{...settings,type:'info'});
  };
  danger = (description,settings) => {
    return this._toggleShow(description,{...settings,type:'danger'});
  };
  warning = (description,settings) => {
    return this._toggleShow(description,{...settings,type:'warning'});
  };
}


const toast = new Toast();

export default toast