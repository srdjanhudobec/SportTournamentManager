import styled from "styled-components";

const StyledAdDiv = styled.div`
background-color: #8CC92D;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  height:70vh;
  width:150px;
`;

const AdComponent = () => {
    return (
        <StyledAdDiv>
            <span>
                Ad
            </span>
        </StyledAdDiv>
    );
}

export default AdComponent;