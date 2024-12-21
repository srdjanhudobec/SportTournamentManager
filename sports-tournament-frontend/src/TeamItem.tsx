import styled from "styled-components";
import ReactLogo from './assets/react.svg';
import { joinTeam } from "./data/TeamActions";
import Button from "./shared/ui/Button";

const StyledTeamDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; 
  width: 100%;
  gap: 20px;
  padding: 10px 20px;
  color: white;
  border-bottom: 1px solid #2a3b50;
`;

const LogoAndName = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
`;

interface TeamItemProps {
  id: string;
  name: string;
  logo: string;
}

  const handleJoinTeam = async (timId: string) => {
    const parsedTeamId = parseInt(timId, 10);
    const result = await joinTeam(parsedTeamId);
      console.log("Joined team:", result);
  };

const TeamItem = ({ id, name, logo }: TeamItemProps) => {
  return (
    <StyledTeamDiv>
      <LogoAndName>
        <img src={ReactLogo} alt={name} style={{ width: "30px", height: "30px" }} />
        <span>{name}</span>
      </LogoAndName>
      <Button onClick={() => handleJoinTeam(id)}> Join team</Button>
    </StyledTeamDiv>
  );
};

export default TeamItem;
