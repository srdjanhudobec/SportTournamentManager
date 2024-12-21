import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"; // Assuming you have a context for auth
import { getTeamById } from "../data/TeamActions"; // API function for fetching team details
import { getTournamentsByTeam } from "../data/TournamentActions"; // API function for fetching tournaments by team ID
import styled from "styled-components";
import { Tournament } from "../interfaces/Tournament"; // Tournament interface
import { Team } from "../interfaces/Team"; // Team interface
import { joinTeam } from "../data/TeamActions";
import ReactLogo from "../assets/react.svg";
import Button from "../shared/ui/Button";

// Styled components
const StyledMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const StyledTeamDetailsDiv = styled.div`
  padding: 20px;
  background-color: #1b2735;
  color: white;
  border-radius: 10px;
`;
const StyledTeamInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TeamHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const MemberList = styled.ul`
  margin-top: 1rem;
  padding-left: 1.5rem;
  list-style-type: none;
  padding: 0;
`;

const MemberItem = styled.li`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const TournamentList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
`;

const TournamentItem = styled.li`
  background-color: #2a3b50;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const TeamDetails = () => {
  const { teamId } = useParams(); // Get teamId from URL
  const { token, user } = useAuth(); // Get token from auth context
  const [team, setTeam] = useState<Team | null>(null);
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [isMember, setIsMember] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teamResponse = await getTeamById(Number(teamId), token!);
        setTeam(teamResponse);
        setIsMember(teamResponse.ucesnici.some((ucesnik: string) => ucesnik.toLocaleLowerCase() === user?.korisnickoIme.toLocaleLowerCase()));



        const tournamentsResponse = await getTournamentsByTeam(
          Number(teamId),
          token!
        );
        console.log(tournamentsResponse);
        
        setTournaments(tournamentsResponse);
      } catch (error) {
        setError("Error fetching data.");
      }
    };

    if (token) {
      fetchData();
    }
  }, [teamId, token, user?.korisnickoIme]);

  const isTeam = (response: any): response is Team => {
    return response && Array.isArray(response.ucesnici);
  };

  const handleJoinTeam = async () => {
    if (token != null) {
      const response = await joinTeam(Number(teamId), token);
      if (isTeam(response)) {
        setIsMember(true);
        setTeam(response);
      }
    }
  };

  if (!team) {
    return <p>Loading...</p>;
  }

  return (
    <StyledMainDiv>
      <StyledTeamDetailsDiv>
        <StyledTeamInfoDiv>
          <TeamHeader>
            <h1>{team.naziv}</h1>
            <img
              src={ReactLogo}
              alt={team.naziv}
              style={{ width: "100px", height: "100px" }}
            />
          </TeamHeader>
          <MemberList>
            <h4>Members:</h4>
            {team.ucesnici.map((member, index) => (
              <MemberItem key={index}>{member}</MemberItem>
            ))}
          </MemberList>
          {!isMember && <Button onClick={handleJoinTeam}>Join Team</Button>}
        </StyledTeamInfoDiv>

        <h2>Tournaments</h2>
        {tournaments.length > 0 ? (
          <TournamentList>
            {tournaments.map((tournament) => (
              <TournamentItem key={tournament.id}>
                <h3>{tournament.mestoOdrzavanja}</h3>
                <p>
                  Start Date:{" "}
                  {new Date(tournament.pocetak).toLocaleDateString()}
                </p>
                <p>
                  End Date: {new Date(tournament.kraj).toLocaleDateString()}
                </p>
                <p>Tournament Type: Basketball</p>
                <h4>1st Place: {tournament.prvoMesto?.naziv}</h4>
                <h4>2nd Place: {tournament.drugoMesto?.naziv}</h4>
                <h4>3rd Place: {tournament.treceMesto?.naziv}</h4>
              </TournamentItem>
            ))}
          </TournamentList>
        ) : (
          <p>This team is not participating in any tournaments currently.</p>
        )}
      </StyledTeamDetailsDiv>
    </StyledMainDiv>
  );
};

export default TeamDetails;
