import styled from "styled-components";
import AdComponent from "../shared/AdComponent";
import TeamsList from "../TeamsList";


const StyledTeamsContainer = styled.div`
display: flex;
align-items:center;
margin-top: 50px;
gap:40px;
padding: 0 60px;

`


const TeamsPage = () => {


    return (
        <StyledTeamsContainer>
            <AdComponent></AdComponent>
            <TeamsList>
            
            </TeamsList>
            <AdComponent></AdComponent>
        </StyledTeamsContainer>
    );
}

export default TeamsPage;