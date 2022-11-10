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
  background-size: cover;
  background-position: center;
  height: 100vh;
`;

export const Navbar = styled.nav`
  height: 80px;
  background: linear-gradient(
    to right,
    rgba(20, 20, 35, 0.4),
    rgba(35, 20, 20, 0.4)
  );
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  font-size: ${(props) => `${props.fontSize}px`};
  padding: 0 5%;

  @media (min-width: 1133px) {
    height: 100px;
  }
`;

export const HambuMenu = styled.i`
  font-size: 30px;
  cursor: pointer;
  transition: 0.4s;

  ${(props) =>
    props.open
      ? `
      transform: rotate(180deg);
      `
      : `
      transform: rotate(0);
  `}

  @media (min-width: 1133px) {
    display: none;
  }
`;

export const Logo = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  @media (min-width: 1133px) {
  }
`;

export const Nav = styled.ul`
  @media (max-width: 1132px) {
    ${(props) =>
      props.open
        ? `
      max-height: 200px;
      overflow:hidden;
      `
        : `
      max-height: 0;
      overflow: hidden;
  `}
  }

  position: absolute;
  display: flex;
  transition: 0.4s;
  flex-direction: column;
  top: 80px;
  right: 0;
  background: linear-gradient(to right, rgb(20, 20, 35), rgb(35, 20, 20));
  li {
    list-style-type: none;
    cursor: pointer;
    margin: 15px 10px;
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

  @media (min-width: 1133px) {
    position: static;
    flex-direction: row;
    background: none;
    li {
      margin: 15px 10px;
    }
    display: flex;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: calc(100% - 80px);
  background-color: rgba(35, 35, 35, 0.4);
  @media (min-width: 1133px) {
    height: calc(100% - 100px);
  }
`;

export const Content = styled.div`
  h1 {
    font-size: ${(props) => `${props.margin * 1.5}px`};
    margin-bottom: ${(props) => `${props.margin}px`};
    text-shadow: 8px 8px 10px black;
  }

  h2 {
    margin-bottom: ${(props) => `${props.margin}px`};
    font-weight: normal;
    font-size: ${(props) => `${props.margin / 1.5}px`};
  }

  a {
    font-size: 20px;
    text-transform: uppercase;
    color: black;
    letter-spacing: 1.5px;
    border-radius: 5px;
    padding: 16px 30px;
    cursor: pointer;
    transition: 0.4s;
    background-color: white;
    text-decoration: none;

    &:hover {
      background-color: black;
      color: white;
    }
  }
  @media (min-width: 1133px) {
    h2 {
      font-size: 30px;
    }

    a {
      padding: 8px 30px;

      &:hover {
        background-color: black;
        color: white;
      }
    }
  }
`;
