import React from "react";

type TabsPaneProps = {
  children?: React.ReactNode;
  tab: React.ReactNode;
  key: Number;
  disabled?: Boolean;
};

const TabsPane = (props: TabsPaneProps): JSX.Element => {
  let { children } = props || {};
  return <div>{children}</div>;
};

export default TabsPane;
