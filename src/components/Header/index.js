import {
  HeaderDiv,
  Navbar,
  Logo,
  Nav,
  GlobalStyle,
  Title,
  Content,
} from "./styles";

const Header = () => {
  return (
    <HeaderDiv>
      <GlobalStyle />
      <Navbar fontSize={20}>
        <Logo>
          <span>
            <i class="fa-sharp fa-solid fa-car-side"></i>FavCar
          </span>
        </Logo>
        <Nav>
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
