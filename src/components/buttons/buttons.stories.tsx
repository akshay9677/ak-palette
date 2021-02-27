import * as React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

storiesOf("Button", module)
  .add("Primary Button", () => <Button appearance="primary" onClick={()=>alert('hello')}>New Record</Button>)
  .add("Secondary Button", () => (
    <Button appearance="secondary">Click Me</Button>
  ))
  .add("Mini button", () => (
	  <div style={{display:'flex',justifyContent:'space-around'}}>
    <Button appearance="primary" size='mini'>Click Me</Button>
    <Button appearance="secondary" size='mini'>Click Me</Button>
	</div>
  ))
  .add("Large button", () => (
	  <div style={{display:'flex',justifyContent:'space-around'}}>
    <Button appearance="primary" size='large'>New Record</Button>
    <Button appearance="secondary" size='large'>New Record</Button>
	</div>
  ))

  .add("Uppercase", () => (
	  <div>
	<div style={{display:'flex',justifyContent:'space-around',padding:'20px'}}>
  <Button appearance="primary" uppercase size='mini'>New Record</Button>
  <Button appearance="primary" uppercase >New Record</Button>
  <Button appearance="primary" uppercase size='large'>New Record</Button>
  </div>
	<div style={{display:'flex',justifyContent:'space-around',padding:'20px'}}>
  <Button appearance="secondary" uppercase size='mini'>New Record</Button>
  <Button appearance="secondary" uppercase >New Record</Button>
  <Button appearance="secondary" uppercase size='large'>New Record</Button>
  </div>
  </div>
))
