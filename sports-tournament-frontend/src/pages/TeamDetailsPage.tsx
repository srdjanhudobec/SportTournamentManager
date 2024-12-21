import styled from "styled-components";
import { useAuth } from "../contexts/AuthContext";
import AdComponent from "../shared/AdComponent";
import TeamDetails from "../components/TeamDetails";

const StyledTeamsContainer = styled.div`
display: flex;
align-items:center;
margin-top: 50px;
gap:40px;
padding: 0 60px;
justify-content:space-between;
width:100vw;
`


const TeamDetailsPage = () => {
    const {isAuthenticated} = useAuth();

    return (
        <StyledTeamsContainer>
            <AdComponent/>
            {isAuthenticated ? <TeamDetails/> : <span>Login to see data.</span>}
            <AdComponent/>
        </StyledTeamsContainer>
    );
}

export default TeamDetailsPage;