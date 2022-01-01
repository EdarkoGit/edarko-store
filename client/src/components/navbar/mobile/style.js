import styled from "styled-components";
import { lightBlack, yellow } from "../../../constants/colors";

export const MobileStyle = styled.div`
  position: absolute;
  padding: 20px;
  background-color: ${yellow};
  top: 50px;
  left: 0;
  width: 100vw;
  .itemText {
    color: ${lightBlack};
  }
`;
