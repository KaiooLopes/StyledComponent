import styled from "styled-components";

export const FooterContainer = styled.div`
  justify-content: center;
  display: flex;
  background-color: rgb(10, 10, 10);
  text-align: center;
  align-items: center;
  justify-content: left;
  flex-direction: column;
  padding: 10px 0;
  @media (min-width: 1133px) {
    padding: 0;
    height: 70px;
    justify-content: space-around;
    flex-direction: row;
  }
`;
export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  p {
    color: rgb(80, 80, 80);
    transition: 0.4s;
    font-size: 16px;
    margin: 0 10px 10px 10px;
  }

  p:hover {
    color: rgb(200, 200, 200);
  }

  @media (min-width: 1133px) {
    flex-direction: row;
    p {
      margin: 0 10px;
      font-size: 18px;
    }
  }
`;
export const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;

  ul {
    display: flex;
    list-style-type: none;
  }

  li {
    margin: 0 10px;

    i {
      color: rgb(180, 180, 180);
    }

    &:hover i {
      transition: 0.4s;
      color: rgb(200, 200, 200);
    }
  }
  @media (min-width: 1133px) {
    font-size: 30px;
    li {
      margin: 0 10px;
    }
    i {
      color: rgb(80, 80, 80);
    }
  }
`;
