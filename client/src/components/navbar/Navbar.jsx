import React, { useEffect } from "react";
import { useWidth } from "../hooks/useWidth";
import { NavbarStyle } from "./style";
import { useCollapse } from "../hooks/useCollapse";
import LinkDesktop from "./linkDesktop/LinkDesktop";
import LinkMobile from "./linkMobile/LinkMobile";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const width = useWidth();
  const { collapse, setCollapse, handleCollapseClick } = useCollapse();

  useEffect(() => {
    if (width > 640) {
      setCollapse(false);
    }
  }, [width, setCollapse]);

  useEffect(() => {
    setCollapse(false);
  }, [location, setCollapse]);

  return (
    <NavbarStyle>
      <LinkDesktop width={width} handleCollapseClick={handleCollapseClick} />
      {collapse ? <LinkMobile /> : null}
    </NavbarStyle>
  );
};

export default Navbar;
