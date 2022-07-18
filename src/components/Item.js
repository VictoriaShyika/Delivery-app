import React from "react";
import Button from "./UI/Button";

export default function Item(props) {
  return (
    <div className="item">
      <img src={"./img/" + props.item.img} alt={props.item.desc} />
      <h2>{props.item.title}</h2>
      <p>{props.item.desc}</p>
      <b>{props.item.price} грн</b>
      <Button onClick={() => props.addToOrders(props.item)}>Add to cart</Button>
    </div>
  );
}
