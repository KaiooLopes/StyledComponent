import styled from "styled-components";

export const Car = styled.div`
  background: url(${(props) => `${props.img}`});
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 400px;
  flex: 1;
  transition: 0.8s;
  border-radius: 10px;

  &:hover {
    flex: 6;
  }

  &:hover span,
  &:hover h2 {
    visibility: hidden;
    opacity: 0;
  }
`;

export const ContentCar = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: ${(props) => props.color}; */

  span {
    transition: 0.4s;
    font-size: 100px;
    font-weight: bold;
    color: rgba(30, 30, 30, 0.8);
  }

  h2 {
    transition: 0.4s;
    align-self: center;
  }
`;
