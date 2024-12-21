import { useEffect, useState } from "react";
import styled from "styled-components";
import TeamItem from "./TeamItem";
import { getAllTeams, joinTeam } from "../src/data/TeamActions";
import { Team } from "./interfaces/Team";

const StyledMainDiv = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  padding: 10px;
  position: relative;
  width: 82vw;
  align-items: flex-start;
  background-color: #1b2735;
  border-radius: 10px;
`;


const TeamsList = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeams = async () => {
      const result = await getAllTeams();
      console.log(result);
      
      if (typeof result === "string") {
        setError(result);
      } else {
        setTeams(result); 
      }
    };

    fetchTeams();
  }, []);



  if (error) {
    return <p>{error}</p>;
  }

  return (
    <StyledMainDiv>
      {teams.map((team) => (
        <TeamItem key={team.id} id={team.id} name={team.naziv} logo={team.slika} />
      ))}
    </StyledMainDiv>
  );
};

export default TeamsList;
