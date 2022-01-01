import React from "react";
import { IoIosSearch } from "react-icons/io";
import { SearchStyle } from "./style";

const Search = ({ className, onClick, onChange, value }) => {
  return (
    <SearchStyle className={className}>
      <input
        className="inputSearch"
        type="text"
        placeholder="Search"
        onChange={onChange}
        value={value}
      />
      <IoIosSearch className="btnSearch" onClick={onClick} />
    </SearchStyle>
  );
};

export default Search;
