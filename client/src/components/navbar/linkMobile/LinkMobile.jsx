import React from "react";
import { renderLinks } from "../services";
import { LinkMobileStyle } from "./style";

const listLinks = [
  { path: "/catalogue", content: "Catalogo" },
  { path: "/shop", content: "Tienda" },
  { path: "/contact", content: "Contacto" },
];
const LinkMobile = () => {
  return <LinkMobileStyle>{renderLinks(listLinks)}</LinkMobileStyle>;
};

export default LinkMobile;
