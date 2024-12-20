import { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

interface TeamItemProps extends ComponentPropsWithoutRef<'div'> {
    name: String,
    logo: String
}

const StyledTeamDiv = styled.div`
 display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  color: white;
  border-bottom: 1px solid #2a3b50;
`

const TeamItem = ({name, logo}: TeamItemProps) => {
    return (
        <StyledTeamDiv>
            <span>{name}</span>
            <span>{logo}</span>
        </StyledTeamDiv>
    );
}
export default TeamItem;