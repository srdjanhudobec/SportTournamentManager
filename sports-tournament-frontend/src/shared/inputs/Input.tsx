import { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";
import SearchLogo from '../../assets/Search.svg'

export const StyledDiv = styled.div`
  display: flex;
  margin: 10px;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  flex-wrap:wrap;
  &>div{
    flex: 1 0 58%;
    width: 5rem;
  }
`;

export const StyledInput = styled.input`
    background-color:#8CC92D;
    border-radius:25px;
    height:25px;

`;
export const SearchIcon = styled.img`
    position:absolute;
    transform: translateX(20%);
    width:20px;
    height:20px;
`

interface TextInputProps extends ComponentPropsWithoutRef<"input"> {
  label?: string;
  errorMessage?:string;
}

const TextInput = ({ label, errorMessage,...props }: TextInputProps) => {
  
  return (
    <StyledDiv key={props.key}>
      {label && <label htmlFor={label}>{label}</label>}
      <StyledInput {...props} />
      {errorMessage && <div style={{color:"red"}}>{errorMessage}</div>}
      <SearchIcon src={SearchLogo} alt="Search" />
    </StyledDiv>
  );
};

export default TextInput;