import React, { useState } from "react";
import Container from "ui-box";

import "./index.scss";

type RadioProps = {
  label: string;
};

const Radio: React.FC<RadioProps> = ({ label }): JSX.Element => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="pal-radio-container">
      <input onChange={(e) => console.log(e.target.value)} type="radio" />
      <Container
        boxSizing="border-box"
        borderRadius={9999}
        className="pal-radio-actual-input"
        width={13}
        height={13}
        padding={10}
      >
        <svg width={13} height={13} viewBox="0 0 10 10">
          <circle fill="currentColor" cx="5" cy="5" r="5" />
        </svg>
      </Container>
      <span className="pal-radio-label">{label}</span>
    </div>
  );
};

export default Radio;
