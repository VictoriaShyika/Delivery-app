import React, { useState } from "react";
import Order from "./Order";

export default function CartContent(props) {
  const [listener, setListener] = useState(true);
  let total = 0;

  props.orders.forEach(
    (el) => (total += Number.parseFloat(el.price * el.quantity))
  );

  return (
    <div>
      {props.orders.map((el) => (
        <Order
          key={`${el.id}${el.category}`}
          item={el}
          onDelete={props.onDelete}
          listener={listener}
          setListener={setListener}
        />
      ))}
      <p className="total">Total price: {total.toFixed(2)}$</p>
    </div>
  );
}
