import React from "react";
import { SearchStyle } from "./style";
import { IoIosSearch } from "react-icons/io";

const Viewport = ({ className, onSubmit, onChange, value }) => {
  return (
    <SearchStyle className={className} onSubmit={onSubmit}>
      <input
        className="inputSearch"
        type="text"
        placeholder="Producto"
        onChange={onChange}
        value={value}
      />
      <IoIosSearch className="btnSearch" onClick={onSubmit} />
    </SearchStyle>
  );
};

export default Viewport;
