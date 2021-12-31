import React from "react";
import { Btn } from "../common/btn/Btn";
import { CardStyle } from "./style";

const Card = ({ className, id, name, salePrice, mainImg }) => {
  return (
    <CardStyle className={className} to={`/detail/${id}`}>
      <picture>
        <img src={mainImg} alt={name} />
      </picture>
      <h3>{name}</h3>
      <div>
        <strong>$</strong> {salePrice} <strong>USD</strong>
      </div>
      <Btn>Añadir al carrito</Btn>
    </CardStyle>
  );
};

export default Card;
