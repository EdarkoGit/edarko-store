import styled from "styled-components";
import { lightBlack } from "../../../constants/colors";
import { grid } from "../../../utils/mixins";

export const HeaderStyle = styled.header`
  ${grid()};
  grid-template-columns: repeat(3, 1fr);
  background-color: ${lightBlack};
  padding: 10px;
  @media (min-width: 640px) {
    grid-template-columns: auto 1fr auto;
  }
`;
