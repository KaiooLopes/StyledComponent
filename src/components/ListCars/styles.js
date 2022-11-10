import styled from "styled-components";

export const SectionCars = styled.div`
  width: 90%;
  margin: 0 auto 55px auto;
  display: flex;
  flex-direction: column-reverse;
  row-gap: 20px;
  align-items: center;
  justify-content: center;
  @media (min-width: 1133px) {
    row-gap: 40px;
    flex-wrap: nowrap;
    flex-direction: row-reverse;
  }
`;
