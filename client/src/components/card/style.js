import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardStyle = styled(Link)`
  display: grid;
  justify-items: start;
  align-items: center;
  gap: 10px;
  width: 300px;
  height: 500px;
  padding: 8px;
  box-shadow: 2px 4px 12px rgb(0 0 0 / 8%);
  transition: transform 0.8s ease;
  color: #333;
  picture {
    height: 250px;
  }
  &:hover {
    transform: scale(1.05);
  }
`;
