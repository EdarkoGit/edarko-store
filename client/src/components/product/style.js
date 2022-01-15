import styled from "styled-components";

export const ProductStyle = styled.section`
  display: grid;
  justify-items: center;
  gap: 5px;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1600px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1920px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
