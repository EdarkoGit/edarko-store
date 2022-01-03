import { useState } from "react";

export const useNameProduct = () => {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
  };
  return { name, handleNameChange, setName };
};
