import styled from "styled-components";
import AdComponent from "../shared/AdComponent";
import TeamsList from "../TeamsList";
import { useAuth } from "../contexts/AuthContext";


const StyledTeamsContainer = styled.div`
display: flex;
align-items:center;
margin-top: 50px;
gap:40px;
padding: 0 60px;
justify-content:space-between;
width:100vw;
`


const TeamsPage = () => {
    const {isAuthenticated} = useAuth();

    return (
        <StyledTeamsContainer>
            <AdComponent/>
            {isAuthenticated ? <TeamsList/> : <span>Login to see data.</span>}
            <AdComponent/>
        </StyledTeamsContainer>
    );
}

export default TeamsPage;