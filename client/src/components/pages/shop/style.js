import styled from "styled-components";
import { blue, lightBlack } from "../../../constants/colors";

export const ShopStyle = styled.div`
  .paged {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    .page-item-link {
      padding: 15px;
      text-align: center;
    }
    .pageActive {
      background-color: ${blue};
      box-shadow: 0 0 0 0.5px ${lightBlack};
    }
  }
`;
