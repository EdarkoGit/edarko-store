import styled from "styled-components";
import { letraGray, lightBlack } from "../../../constants/colors";
import { grid } from "../../../utils/mixins";

export const DesktopStyle = styled.div`
  ${grid()};
  background-color: ${lightBlack};
  .itemText {
    font-size: 1.5 rem;
    color: ${letraGray};
  }
  @media (min-width: 640px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
