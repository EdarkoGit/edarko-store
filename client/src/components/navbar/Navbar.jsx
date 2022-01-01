import React, { useEffect } from "react";
import { useWidth } from "../hooks/useWidth";
import { NavbarStyle } from "./style";
import { useCollapse } from "../hooks/useCollapse";
import Desktop from "./desktop/Desktop";
import Mobile from "./mobile/Mobile";

const Navbar = () => {
  const width = useWidth();
  const { collapse, setCollapse, handleCollapseClick } = useCollapse();

  useEffect(() => {
    if (width > 640) {
      setCollapse(false);
    }
  }, [width, setCollapse]);

  return (
    <NavbarStyle>
      <Desktop width={width} handleCollapseClick={handleCollapseClick} />
      {collapse ? <Mobile /> : null}
    </NavbarStyle>
  );
};

export default Navbar;
