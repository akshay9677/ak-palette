import React from "react";

import { storiesOf } from "@storybook/react";

import toast from "./Toast";
import Button from "../buttons/Button";

storiesOf("Example/Toaster", module)
  .add("Test", () => {
    return (
      <div>
        <Button
          onClick={() => toast.success("This is a sample alert from props", {})}
        >
          Click Me
        </Button>
      </div>
    );
  })
  .add("Loading", () => {
    return (
      <div>
        <Button
          onClick={() =>
            toast.info("Your request is in progress", {
              title: "In Progress",
              showLoading: true,
            })
          }
        >
          Click Me
        </Button>
      </div>
    );
  });
