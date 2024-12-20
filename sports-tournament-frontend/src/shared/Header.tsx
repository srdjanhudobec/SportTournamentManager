import { useState } from "react";
import styled from "styled-components";
import SiteLogo from "../assets/Vector.svg";
import TextInput from "./inputs/Input";
import Button from "./ui/Button";
import SportsBar from "./SportsBar";
import Modal from "./ui/Modal";
import RegisterForm from "./form/RegisterForm";
import LoginForm from "./form/LoginForm";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
`;

const StyledHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  color: #ffff;
  padding: 0 40px;
  align-items: center;
  border-bottom: 1px solid #262626;
  background-color: #162936;
`;

const Logo = styled.img`
  width: 20px;
  height: 20px;
`;

const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px 0 25px;
  gap: 20px;
`;

const ActionDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap:20px;
`;
let login = [
  {
    rest: {
      type: "text",
      placeholder: "korisnicko ime",
      name: "korisnickoIme",
    },
    label: "Korisnicko Ime",
  },
  {
    rest: {
      type: "password",
      placeholder: "lozinka",
      name: "lozinka",
    },
    label: "Lozinka",
  },
];

const StyledSpan = styled.span`
  color:#ffff;
  text-decoration: none; 

`

let register = [
  {
    rest: {
      type: "text",
      placeholder: "korisnicko ime",
      name: "korisnickoIme",
    },
    label: "Korisnicko Ime",
  },
  {
    rest: {
      type: "text",
      placeholder: "lozinka",
      name: "lozinka",
    },
    label: "Lozinka",
  },
  {
    rest: {
      type: "text",
      placeholder: "Ime",
      name: "ime",
    },
    label: "Ime",
  },
  {
    rest: {
      type: "text",
      placeholder: "prezime",
      name: "prezime",
    },
    label: "Prezime",
  },
  {
    rest: {
      type: "text",
      placeholder: "email",
      name: "email",
    },
    label: "Email",
  },
];

const Header = () => {
  const [registerOpen, setRegisterOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  const handleOpenRegister = () => {
    setRegisterOpen(!registerOpen);
  };

  const handleOpenLogin = () => {
    setLoginOpen(!loginOpen);
  };

  return (
    <StyledHeader>
      <StyledHeaderDiv>
        <LogoDiv>
          <Logo src={SiteLogo} alt="Site logo" />
          <h3>TIM 04</h3>
        </LogoDiv>
        <TextInput search="da"></TextInput>
        <div>
          {isAuthenticated ? (
            <ActionDiv>
              <Link to='/'><StyledSpan> MY TEAMS </StyledSpan></Link>
              <Button onClick={logout}>Logout</Button>
            </ActionDiv>
          ) : (
            <ActionDiv>
              <Button onClick={handleOpenLogin}>Login</Button>
              <Button
                customstyle={{ backgroundColor: "#2C2C2C" }}
                hoverstyle={{ backgroundColor: "#8CC92D" }}
                onClick={handleOpenRegister}
              >
                Register
              </Button>
            </ActionDiv>
          )}
        </div>
      </StyledHeaderDiv>
      <SportsBar></SportsBar>
      <Modal open={registerOpen}>
        <RegisterForm
          schema={register}
          handleCancel={handleOpenRegister}
          handleSubmitForm={handleOpenRegister}
        />
      </Modal>
      <Modal open={loginOpen}>
        <LoginForm
          schema={login}
          handleCancel={handleOpenLogin}
          handleSubmitForm={handleOpenLogin}
        />
      </Modal>
    </StyledHeader>
  );
};

export default Header;
