import styled from "styled-components";
//styledComponent reciclado de otro proyecto,tiene estilos independientes.
export const Btn = styled.button`
  background-color: ${({ backgroundColor }) => backgroundColor || "#F42C37"};
  width: ${({ width }) => width || "auto"};
  color: ${({ color }) => color || "white"};
  text-align: ${({ textAlign }) => textAlign || "center"};
  padding: ${({ padding }) => padding || "10px 37px"};
  border-radius: ${({ borderRadius }) => borderRadius || "25px"};
  font-size: ${({ fontSize }) => fontSize || "inherit"};
  border: none;
  outline: none;
  box-shadow: 0px 0.1px 2px 0.1px black;
  font-weight: bold;
`;
