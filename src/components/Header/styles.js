import styled, { createGlobalStyle } from "styled-components";
import background from "../../background.jpg";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        font-family: sans-serif;
        color: white;
    }
`;

export const HeaderDiv = styled.div`
  background-image: url(${background});
  background-position: center;
  background-size: cover;
  height: 100vh;
  position: relative;
`;

export const Navbar = styled.nav`
  height: 100px;
  background: linear-gradient(
    to right,
    rgba(20, 20, 35, 0.4),
    rgba(35, 20, 20, 0.4)
  );
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 0 5%;
  font-size: ${(props) => `${props.fontSize}px`};
`;

export const Logo = styled.div`
  span {
    font-family: Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
  }
`;

export const Nav = styled.ul`
  display: flex;
  li {
    list-style-type: none;
    margin: 0 10px;
    cursor: pointer;
  }

  li a {
    transition: 0.4s;
    border-radius: 5px;
    text-decoration: none;
    background-color: rgba(35, 35, 35, 0.7);
    padding: 9px;
    &:hover {
      background-color: rgb(50, 50, 50);
    }
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: calc(100% - 100px);
  background-color: rgba(35, 35, 35, 0.4);
`;

export const Content = styled.div`
  h1 {
    font-size: ${(props) => `${props.margin * 2}px`};
    margin-bottom: ${(props) => `${props.margin}px`};
  }

  h2 {
    margin-bottom: ${(props) => `${props.margin / 2}px`};
  }

  a {
    font-size: 20px;
    color: black;
    letter-spacing: 1.5px;
    border-radius: 5px;
    padding: 8px 30px;
    cursor: pointer;
    transition: 0.4s;
    background-color: white;
    text-decoration: none;

    &:hover {
      background-color: black;
      color: white;
    }
  }
`;
