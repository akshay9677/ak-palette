import React, { ReactElement, useState } from "react";
import TabPane from "./TabPane";
import Container from "ui-box";
import "./tabs.scss";

type TabsProps = {
  children?: ReactElement[];
  onTabChange?: (index: number) => void;
  isVertical?: Boolean;
  [prop: string]: any;
};

const Tab = (props: TabsProps): JSX.Element => {
  const [_selected, _setSelected] = useState(0);
  let { children, onTabChange, isVertical, ...rest } = props || {};
  return (
    <Container {...rest} display={isVertical ? "flex" : "block"}>
      <Container display="flex" flexDirection={isVertical ? "column" : "row"}>
        {children?.map((child, index) => {
          let { props, key } = child;
          return (
            <div
              className={`pal-tab-title ${
                _selected === index ? "pal-selected-tab" : ""
              } ${props.disabled ? "pal-tab-disabled" : ""}`}
              key={key || index}
              onClick={() => {
                if (!props.disabled) {
                  _setSelected(index);
                  if (onTabChange) onTabChange(index);
                }
              }}
            >
              {props.tab}
            </div>
          );
        })}
      </Container>
      <Container padding={"12px"}>{children && children[_selected]}</Container>
    </Container>
  );
};

Tab.TabPane = TabPane;

export default Tab;
