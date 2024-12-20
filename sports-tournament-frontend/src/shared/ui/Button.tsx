import { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";


const StyledButton = styled.button<{ customstyle?: React.CSSProperties, hoverstyle?: React.CSSProperties }>`
  margin: 0.5em;
  border-radius: 8px;
  border-color: #8CC92D;
  height: 2em;
  min-width: 5em;
  max-width: 15rem;
  color: #f2f1f2;
  background-color: ${(props) => props.customstyle?.backgroundColor || "#8CC92D"};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;


  &:hover {
    background-color: ${(props) => props.hoverstyle?.backgroundColor || "#2C2C2C"};
    cursor: pointer;
    border-color: ${(props) => props.hoverstyle?.backgroundColor == "#8CC92D" ? "#2C2C2C" : "#8CC92D"};
  }
`;

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: JSX.Element | string;
  customstyle?: React.CSSProperties; 
  hoverstyle?: React.CSSProperties; 
}

const Button = ({ children, onClick, customstyle, hoverstyle, ...props }: ButtonProps) => {
  return (
    <StyledButton {...props} onClick={onClick} customstyle={customstyle} hoverstyle={hoverstyle}>
      {children}
    </StyledButton>
  );
};

export default Button;
