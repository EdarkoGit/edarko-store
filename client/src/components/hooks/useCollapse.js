import { useState } from "react";

export const useCollapse = () => {
  const [collapse, setCollapse] = useState(false);

  const handleCollapseClick = () => {
    setCollapse(!collapse);
  };
  return {
    collapse,
    handleCollapseClick,
    setCollapse,
  };
};
