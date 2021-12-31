import styled from "styled-components";
export const SearchStyle = styled.form`
  margin-bottom: 20px;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 200px 1fr;
  background-color: #3b3b3b;
  overflow: hidden;
  border-radius: 25px;
  width: 250px;
  .inputSearch {
    color: white;
    padding: 3px 0 3px 15px;
    outline: none;
    border: none;
    width: 100%;
    background-color: inherit;
    &::placeholder {
      color: #d6d6d6;
      padding-left: 3px;
    }
  }
  .btnSearch {
    color: #d6d6d6;
    width: 100%;
  }
`;
