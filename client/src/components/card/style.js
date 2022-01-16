import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardStyle = styled(Link)`
  display: grid;
  justify-items: start;
  align-items: center;
  gap: 15px;
  padding: 15px;
  transition: transform 0.8s ease;
  color: #333;
  width: 300px;
  height: 400px;
  picture {
    img {
      max-width: 200px;
      max-height: 180px;
    }
  }
  &:hover {
    transform: scale(1.1);
  }
`;
