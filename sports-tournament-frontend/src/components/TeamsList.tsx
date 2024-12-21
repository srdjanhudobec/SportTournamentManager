import { useEffect, useState } from "react";
import styled from "styled-components";
import TeamItem from "./TeamItem";
import { getAllTeams, getUserTeams, joinTeam } from "../data/TeamActions";
import { Team } from "../interfaces/Team";
import { useAuth } from "../contexts/AuthContext";

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

interface TeamsListProps {
  own?: boolean;  
}

const TeamsList = ({own}:TeamsListProps) => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [error, setError] = useState<string | null>(null);
  const {token} = useAuth();

  useEffect(() => {
    const fetchTeams = async () => {
      let result;
      if (own) {
        result = await getUserTeams(token!); 
      } else {
        result = await getAllTeams(); 
      }
  
      if (typeof result === "string") {
        setError(result);
      } else {
        setTeams(result);
      }
    };
  
    fetchTeams();
  }, [own]);  // Add 'own' to the dependency array
  



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
