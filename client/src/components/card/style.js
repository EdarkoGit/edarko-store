import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardStyle = styled(Link)`
  display: grid;
  justify-items: start;
  align-items: center;
  gap: 15px;
  height: 520px;
  padding: 15px;
  transition: transform 0.8s ease;
  color: #333;
  picture {
    height: 300px;
    overflow: hidden;
  }
  &:hover {
    transform: scale(1.05);
  }
`;
