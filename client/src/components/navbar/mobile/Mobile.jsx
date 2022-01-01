import React from "react";
import { renderLinks } from "../services";
import { MobileStyle } from "./style";

const listLinks = [
  { path: "/catalogue", content: "Catalogo" },
  { path: "/shop", content: "Tienda" },
  { path: "/contact", content: "Contacto" },
];
const Mobile = () => {
  return (
    <MobileStyle>
      {renderLinks(listLinks)}
      <span className="itemText">Categorias</span>
    </MobileStyle>
  );
};

export default Mobile;
