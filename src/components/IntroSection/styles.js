import styled from "styled-components";

export const Intro = styled.div`
  display: flex;
  align-items: center;
  padding: 80px 0;
`;

export const Content = styled.div`
  padding: 20px 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  flex-direction: column;
  background-color: rgb(30, 30, 30);
  width: 90%;
  border-radius: 20px;

  img {
    width: 40%;
    min-width: 80px;
    max-width: 150px;
    border-radius: 100%;
  }

  p {
    font-size: 20px;
    width: 70%;
    line-height: 2em;
    letter-spacing: 1px;
  }
  @media (min-width: 1133px) {
    flex-direction: row;
    img {
      width: 15%;
      max-width: 400px;
    }
  }
`;
