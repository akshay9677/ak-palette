import * as React from "react";
import { storiesOf } from "@storybook/react";
import Checkbox from "./Checkbox";

storiesOf("CheckBox", module)
  .add("CheckBox", () => <Checkbox onChange={(e) => console.log(e)} />)
  .add("CheckBox disabled", () => (
    <Checkbox onChange={(e) => console.log(e)} disabled />
  ));
