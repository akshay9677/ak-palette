import React from "react";
import "./index.scss";

type ButtonProps = {
  children: React.ReactNode
  appearance?: string | undefined
  size?:string | undefined
  uppercase?:boolean
  onClick?:()=> void,
}

const Button: React.FC<ButtonProps> = ({
  children,
  appearance,
  size,
  uppercase,
  onClick,
  ...rest
}): JSX.Element => {
  return (
    <button
    onClick={onClick}
      className={`pal-button-container 
    ${appearance ?  appearance  : "primary"}
     ${size ? size : 'small'} 
     ${uppercase ? 'uppercase' : ''}`}
     {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
