import styled from "styled-components";
import { Tournament } from "./interfaces/Tournament";
import { Team } from "../src/interfaces/Team";

const StyledTeamDetailsDiv = styled.div`
  padding: 20px;
  background-color: #1b2735;
  color: white;
  border-radius: 10px;
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

const JoinButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

interface TeamDetailsProps {
  team: Team;
  tournaments: Tournament[];
  isUserInTeam: boolean;
  onJoinTeam: () => void;
}

const TeamDetails = ({
  team,
  tournaments,
  isUserInTeam,
  onJoinTeam,
}: TeamDetailsProps) => {
  return (
    <StyledTeamDetailsDiv>
      <h1>{team.naziv}</h1>
      <img
        src={team.slika || "/placeholder-image.png"}
        alt={team.naziv}
        style={{ width: "100px", height: "100px" }}
      />

      {!isUserInTeam && <JoinButton onClick={onJoinTeam}>Join Team</JoinButton>}

      <h2>Tournaments</h2>
      {tournaments.length > 0 ? (
        <TournamentList>
          {tournaments.map((tournament) => (
            <TournamentItem key={tournament.id}>
              <h3>{tournament.mestoOdrzavanja}</h3>
              <p>
                Start Date: {new Date(tournament.pocetak).toLocaleDateString()}
              </p>
              <p>End Date: {new Date(tournament.kraj).toLocaleDateString()}</p>
              <p>Tournament Type: {tournament.tipTurnira}</p>
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
  );
};

export default TeamDetails;
