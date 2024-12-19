import { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";


const StyledButton = styled.button<{ customStyle?: React.CSSProperties, hoverStyle?: React.CSSProperties }>`
  margin: 0.5em;
  border-radius: 8px;
  border-color: #8CC92D;
  height: 2em;
  min-width: 5em;
  max-width: 15rem;
  color: #f2f1f2;
  background-color: ${(props) => props.customStyle?.backgroundColor || "#8CC92D"};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;


  &:hover {
    background-color: ${(props) => props.hoverStyle?.backgroundColor || "#2C2C2C"};
    cursor: pointer;
    border-color: ${(props) => props.hoverStyle?.backgroundColor == "#8CC92D" ? "#2C2C2C" : "#8CC92D"};
  }
`;

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: JSX.Element | string;
  customStyle?: React.CSSProperties; 
  hoverStyle?: React.CSSProperties; 
}

const Button = ({ children, onClick, customStyle, hoverStyle, ...props }: ButtonProps) => {
  return (
    <StyledButton {...props} onClick={onClick} customStyle={customStyle} hoverStyle={hoverStyle}>
      {children}
    </StyledButton>
  );
};

export default Button;
