import React, { useEffect, useState } from "react";
import Container from "ui-box";

import Text from "../typography/Text";
import "./index.scss";

type RadioProps = {
  label: string;
  checked?: boolean;
  onChange?: (e: any) => void;
  disabled?: boolean;
};

const Radio: React.FC<RadioProps> = ({
  label,
  checked,
  onChange,
  disabled,
}): JSX.Element => {
  const [isChecked, setChecked] = useState(checked ? checked : false);

  useEffect(() => {
    if (checked !== undefined && !disabled) setChecked(checked);
  }, [checked]);

  const _handleCheckClick = (e: any): void => {
    e.target.value = true;
    if (onChange && !disabled) onChange(e);
  };

  return (
    <Container
      marginY={8}
      className={`pal-radio-container ${disabled && "pal-radio-disabled"}`}
      onClick={_handleCheckClick}
    >
      <Container
        boxSizing="border-box"
        borderRadius={9999}
        display="flex"
        flex="0 0 auto"
        alignItems="center"
        justifyContent="center"
        className={`pal-radio-input ${!isChecked && "pal-radio-unselected"} `}
        width={13}
        height={13}
      >
        {isChecked && (
          <svg width={5} height={5} viewBox="0 0 10 10">
            <circle fill="currentColor" cx="5" cy="5" r="5" />
          </svg>
        )}
      </Container>
      <Text opacity={disabled && 0.5} paddingLeft="8px" label={label}></Text>
    </Container>
  );
};

export default Radio;
