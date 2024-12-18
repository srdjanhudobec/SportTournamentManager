import { useState } from "react";
import styled from "styled-components";
import SiteLogo from '../assets/Vector.svg'
import TextInput from "./inputs/Input";
import Button from "./ui/Button";
import SportsBar from "./SportsBar";

const StyledHeader = styled.header`
  display:flex;
  justify-content: space-between;
  color: #8CC92D;
  padding: 0 40px;
  align-items: center;
  
  border-bottom: 1px solid #262626;
  background-color: #162936;
`;

const Logo = styled.img`
    width:20px;
    height:20px;
`

const Header = () =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    function handleClick() {
      setIsLoggedIn(!isLoggedIn);
    }


    return (
      <div>
        <StyledHeader>
            <Logo src={SiteLogo} alt="Site logo" />
            <h3>TIM 04</h3>
            <TextInput></TextInput>
            <Button onClick={handleClick}>Login</Button>
            <Button onClick={handleClick} customStyle={{ backgroundColor: "#2C2C2C" }} hoverStyle={{backgroundColor:"#8CC92D"}}>Register</Button>
        </StyledHeader>
        <SportsBar></SportsBar>
      </div>
    );
}

export default Header;