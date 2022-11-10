import styled from "styled-components";

export const Car = styled.div`
  background: url(${(props) => `${props.img}`});
  background-position: center;
  background-size: cover;
  transition: 0.8s;
  border-radius: 5px;
  cursor: pointer;
  width: 90%;

  @media (min-width: 1133px) {
    height: 450px;
    flex: 1;
    &:hover {
      flex: 6;
    }
    &:hover span,
    &:hover h2 {
      visibility: hidden;
      opacity: 0;
    }
  }
`;

export const ContentCar = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(20, 20, 20, 0.4);

  span {
    transition: 0.4s;
    font-size: 100px;
    font-weight: bold;
    color: rgba(200, 200, 200, 0.8);
  }

  h2 {
    transition: 0.4s;
    align-self: center;
  }
`;
