import styled from "styled-components";
import { blue } from "../../../constants/colors";

export const ShopStyle = styled.div`
  .paged {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    .paged-item {
      padding: 15px 15px 10px 15px;
      text-align: center;
    }
    .pageActive {
      background-color: ${blue};
    }
    .paged-numbers {
    }
  }
`;
