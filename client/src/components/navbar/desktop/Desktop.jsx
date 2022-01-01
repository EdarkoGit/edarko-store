import React from "react";
import { DesktopStyle } from "./style";
import { FaBars } from "react-icons/fa";
import { renderLinks } from "../services";

const listLinks = [
  { path: "/", content: "Home" },
  { path: "/catalogue", content: "Catalogo" },
  { path: "/shop", content: "Tienda" },
  { path: "/contact", content: "Contacto" },
];

const Desktop = ({ width, handleCollapseClick }) => {
  return (
    <DesktopStyle>
      {width > 0 && width < 640 ? (
        <FaBars onClick={handleCollapseClick} color="white" />
      ) : (
        <>
          {renderLinks(listLinks)}
          <div className="itemText">Categorias</div>
        </>
      )}
    </DesktopStyle>
  );
};

export default Desktop;
