import styled from "styled-components";

export const SelectedCarImage = styled.div`
  display: flex;
  margin: 0 auto;
  width: 90%;
  padding: 50px 0 75px 0;
  align-items: center;
  justify-content: center;
  text-align: center;
  img {
    width: 100%;
    max-width: 1280px;
    max-height: 720px;
    border-radius: 10px;
    border: 10px solid ${(props) => props.color};
  }
`;
