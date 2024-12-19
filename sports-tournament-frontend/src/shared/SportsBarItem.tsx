import { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

interface SportsBarItemProps extends ComponentPropsWithoutRef<'li'>{
    children: JSX.Element | string;
    logo : string;
}

const StyledLi = styled.li`
list-style: none;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding:5px;
flex-wrap: nowrap;
`
const Logo = styled.img`
    width:20px;
    height:20px;
`

const SportsBarItem = ({children, logo}: SportsBarItemProps) => {
    return (
        <StyledLi>
            <Logo src={logo} alt="" />
            <span>{children}</span>
        </StyledLi>
    );
}

export default SportsBarItem;