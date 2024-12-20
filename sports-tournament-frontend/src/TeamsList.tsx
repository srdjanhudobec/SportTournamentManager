import styled from "styled-components";
import TeamItem from "./TeamItem";

const StyledMainDiv = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  padding: 10px;
  position: relative;
  width: 82vw;
  align-items:center;
  background-color: #1b2735;
  border-radius: 10px;
  overflow-y: auto;
  flex-grow: 1;
`;

interface Team {
    id: number;
    name: string;
    logo: string;
  }
  
const teams: Team[] = [
    { id: 1, name: "Team 1", logo: "logo1.png" },
    { id: 2, name: "Team 2", logo: "logo2.png" },
    { id: 3, name: "Team 3", logo: "logo3.png" },
    { id: 4, name: "Team 4", logo: "logo4.png" },
    { id: 5, name: "Team 5", logo: "logo5.png" },
    { id: 6, name: "Team 6", logo: "logo6.png" },
    { id: 7, name: "Team 7", logo: "logo7.png" },
    { id: 8, name: "Team 8", logo: "logo8.png" },
    { id: 9, name: "Team 9", logo: "logo9.png" },
  ];

const TeamsList = () => {
    return (
        <StyledMainDiv>
            {teams.map((team)=> (
                <TeamItem key={team.id} name={team.name} logo={team.logo}/>
            ))}
        </StyledMainDiv>
    );
}

export default TeamsList;