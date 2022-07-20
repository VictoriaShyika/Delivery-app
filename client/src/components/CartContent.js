import axios from "axios";
import React, { useState } from "react";
import Order from "./Order";
import Button from "./UI/Button";

export default function CartContent(props) {
  const [listener, setListener] = useState(true);
  let total = 0;

  props.orders.forEach(
    (el) => (total += Number.parseFloat(el.price * el.quantity))
  );

  const sendData = async () => {
    const orderData = {
      "name": props.name,
      "email": props.email,
      "phone": props.phone,
      "address": props.address,
      "order": props.orders,
    };
    try {
      const resp = await axios.post("http://localhost:5000/order/create", orderData);
      console.log(resp.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      <div className="cart-content">
        {props.orders.map((el) => (
          <Order
            key={`${el.id}${el.category}`}
            item={el}
            onDelete={props.onDelete}
            listener={listener}
            setListener={setListener}
            orders={props.orders}
          />
        ))}
      </div>

      <p className="total">Total price: {total.toFixed(2)} грн</p>
      <div>
        <Button onClick={() => sendData()} className="submit">
          Submit
        </Button>
      </div>
    </div>
  );
}
