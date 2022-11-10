import { useEffect, useState } from "react";
import {
  HeaderDiv,
  Navbar,
  Logo,
  Nav,
  GlobalStyle,
  Title,
  Content,
  HambuMenu,
} from "./styles";

const Header = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1133) {
        setOpen(true);
      } else if (window.innerWidth < 1133) {
        setOpen(false);
      }
    });
  }, []);
  return (
    <HeaderDiv>
      <GlobalStyle />
      <Navbar fontSize={20}>
        <Logo>
          <span>
            <i className="fa-sharp fa-solid fa-car-side"></i>FavCar
          </span>
        </Logo>
        <HambuMenu
          className="fa-solid fa-caret-down"
          onClick={() => setOpen(!open)}
          open={open}
        ></HambuMenu>
        <Nav open={open}>
          <li>
            <a href="https://github.com/KaiooLopes">Projetos</a>
          </li>
          <li>
            <a href="#footer">Contate-me</a>
          </li>
          <li>
            <a href="#intro">Sobre</a>
          </li>
        </Nav>
      </Navbar>
      <Title>
        <Content margin={40}>
          <h1>Meus Carros Favoritos</h1>
          <h2>
            Fiz uma lista dos meus carros favoritos, ranqueando eles em um top
            10
          </h2>
          <a href="#list-car">Conferir</a>
        </Content>
      </Title>
    </HeaderDiv>
  );
};

export default Header;
