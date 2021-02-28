import * as React from "react";
import { storiesOf } from "@storybook/react";
import Spinner from "./Spinner";

storiesOf("Spinner", module)
  .add("Default Spinner", () => <Spinner />)
  .add("Spinner Sizes", () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Spinner size="small" />
        <Spinner size="default" />
        <Spinner size="medium" />
        <Spinner size="large" />
      </div>
    );
  })

  .add("Coloured Spinner", () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Spinner size="large" color="green" />
        <Spinner size="large" color="yellow" />
        <Spinner size="large" color="red" />
        <Spinner size="large" color="blue" />
      </div>
    );
  });
