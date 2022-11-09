import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 70px;
  background-color: rgb(10, 10, 10);
  text-align: center;
  align-items: center;
`;
export const Contact = styled.div`
  display: flex;

  p {
    margin: 0 10px;
    font-size: 18px;
    color: rgb(80, 80, 80);
    transition: 0.4s;
  }

  p:hover {
    color: rgb(200, 200, 200);
  }
`;
export const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;

  ul {
    display: flex;
    list-style-type: none;
  }

  li {
    margin: 0 10px;

    i {
      color: rgb(80, 80, 80);
    }

    &:hover i {
      transition: 0.4s;
      color: rgb(200, 200, 200);
    }
  }
`;
