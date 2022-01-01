import React from "react";
import Logo from "../../logo/Logo";
import Navbar from "../../navbar/Navbar";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

import { HeaderStyle } from "./style";

const Header = () => {
  return (
    <HeaderStyle>
      <Link to={"/"}>
        <Logo />
      </Link>
      <Navbar />
      <Link to={"/trolley"}>
        <FiShoppingCart color="white" />
      </Link>
    </HeaderStyle>
  );
};

export default Header;
