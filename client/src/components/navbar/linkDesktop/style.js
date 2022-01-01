import styled from "styled-components";
import { letraGray, lightBlack } from "../../../constants/colors";
import { grid } from "../../../utils/mixins";

export const LinkDesktopStyle = styled.section`
  ${grid()};
  background-color: ${lightBlack};
  .itemText {
    font-size: 1.5 rem;
    color: ${letraGray};
    padding: 0px 10px;
  }
  @media (min-width: 640px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
