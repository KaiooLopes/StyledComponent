import styled from "styled-components";

export const Intro = styled.div`
  display: flex;
  align-items: center;
  height: 500px;
  padding: 80px 0;
`;

export const Content = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  flex-direction: row;
  background-color: rgb(30, 30, 30);
  width: 80%;
  height: 80%;
  border-radius: 20px;

  img {
    width: 20%;
    border-radius: 100%;
  }

  p {
    font-size: 30px;
    width: 70%;
    line-height: 1.5em;
    letter-spacing: 1px;
  }
`;
