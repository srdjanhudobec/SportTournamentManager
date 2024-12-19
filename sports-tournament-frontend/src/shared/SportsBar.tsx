import Football from '../assets/Vector (1).svg'
import Basketball from '../assets/Basketball.svg'
import AmFootball from '../assets/Am.Football.svg'
import Tennis from '../assets/Tennis.svg'
import TablTennis from '../assets/Tbl.Tennis.svg'
import Baseball from '../assets/Baseball.svg'
import Cricket from '../assets/Cricket.svg'
import Rugby from '../assets/Rugby.svg'
import Waterpolo from '../assets/Waterpolo.svg'
import Volleyball from '../assets/Volleyball.svg'
import Motosport from '../assets/Motosport.svg'
import More from '../assets/Dot Horizontal.svg'
import SportsBarItem from './SportsBarItem'
import styled from 'styled-components'


const sports = [['Football',Football],['Basketball', Basketball], ['Am.Football', AmFootball], ['Tennis', Tennis], ['Table tennis', TablTennis], ['Baseball', Baseball], ['Cricket', Cricket], ['Rugby', Rugby], ['Volleyball', Volleyball], ['Motosport', Motosport], ['Waterpolo', Waterpolo], ['More', More]]

const StyledDivBar = styled.div`
display:flex;
flex-direction:row;
justify-content:space-evenly;
background-color:#162936;
opacity:0.85;
gap:50px;
height:100px;
`;

const StyledUl = styled.ul`
display:flex;
justify-content:space-between;
padding:0 20px;
flex-wrap: nowrap;
`;

const SportsBar = () => {
    return (
        <StyledDivBar>
            <StyledUl>
                {sports.map(([name, Icon], index)=>(<SportsBarItem key={index} logo={Icon}>{name}</SportsBarItem>))}
            </StyledUl>
        </StyledDivBar>
    );
}

export default SportsBar;