import React from "react";
import { liWithLink } from "./services";
import { NavbarStyle } from "./style";
const Navbar = () => {
  return (
    <NavbarStyle>
      <ul>
        {liWithLink("/", "Logo")}
        {liWithLink("/", "Home")}
        {liWithLink("/catalogue", "Lista de partes")}
        {liWithLink("/shop", "Tienda")}
        <li>Categorias</li>
        {liWithLink("/contact", "Contacto")}
        {liWithLink("/trolley", "Carrito")}
      </ul>
    </NavbarStyle>
  );
};

export default Navbar;
