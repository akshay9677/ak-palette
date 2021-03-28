import React from "react";

import { storiesOf } from "@storybook/react";

import DatePicker from "./DatePicker";

storiesOf("Example/DatePicker", module)
  .add("Test", () => {
    return (<DatePicker onChange={(e)=>console.log(e)} placeholder='Enter Date' />
    );
  })
