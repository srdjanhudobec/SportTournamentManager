import { useState } from "react";
import styled from "styled-components";
import SiteLogo from '../assets/Vector.svg'
import TextInput from "./inputs/Input";

const StyledHeader = styled.header`
  color: #8CC92D;
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid #262626;
  background-color: #162936;
`;

const Logo = styled.img`
    width:20%;
    height:20%;
`

const Header = () =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    function handleClick() {
      setIsLoggedIn(!isLoggedIn);
    }


    return (
        <StyledHeader>
            <Logo src={SiteLogo} alt="Site logo" />
            <h3>TIM 04</h3>
            <TextInput></TextInput>
            <button onClick={handleClick}>Login</button>
        </StyledHeader>
    );
}

export default Header;