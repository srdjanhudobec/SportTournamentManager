import styled from "styled-components";
import ReactLogo from '../assets/react.svg';
import { Link } from "react-router-dom";

const StyledTeamDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; 
  width: 100%;
  gap: 20px;
  padding: 10px 20px;
  color: white;
  border-bottom: 1px solid #2a3b50;
  box-sizing: border-box;
  height: 50px; 
`;

const LogoAndName = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: 60%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 100%; /* Ensure it fills the height of the parent */
`;

const StyledSpan = styled.span`
  color:#8CC92D;
`

interface TeamItemProps {
  id: string;
  name: string;
  logo: string;
}

const TeamItem = ({ id, name, logo }: TeamItemProps) => {
  return (
    <StyledTeamDiv>
      <LogoAndName>
        <img src={ReactLogo} alt={name} style={{ width: "30px", height: "30px" }} />
        <span>{name}</span>
      </LogoAndName>
     <Link to={`/teams/${id}`}><StyledSpan> View details</StyledSpan></Link>
    </StyledTeamDiv>
  );
};

export default TeamItem;
