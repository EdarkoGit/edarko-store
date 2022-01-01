import React from "react";
import { LinkDesktopStyle } from "./style";
import { FaBars } from "react-icons/fa";
import { renderLinks } from "../services";

const listLinks = [
  { path: "/", content: "Home" },
  { path: "/catalogue", content: "Catalogo" },
  { path: "/shop", content: "Tienda" },
  { path: "/contact", content: "Contacto" },
];

const LinkDesktop = ({ width, handleCollapseClick }) => {
  return (
    <LinkDesktopStyle>
      {width > 0 && width < 640 ? (
        <FaBars onClick={handleCollapseClick} color="white" />
      ) : (
        <>{renderLinks(listLinks)}</>
      )}
    </LinkDesktopStyle>
  );
};

export default LinkDesktop;
