import axios from "axios";
import React, { useState } from "react";
import Order from "./Order";
import Button from "./UI/Button";
import { toast } from "react-toastify";

export default function CartContent(props) {
  const [listener, setListener] = useState(true);
  let total = 0;

  props.orders.forEach(
    (el) => (total += Number.parseFloat(el.price * el.quantity))
  );

  const sendData = async () => {
    if (props.name && props.email && props.phone && props.address) {
      const orderData = {
        name: props.name,
        email: props.email,
        phone: props.phone,
        address: props.address,
        order: props.orders,
      };
      try {
        const resp = await axios.post("/order/create", orderData);
        console.log(resp.data);
        props.setOrders([]);
        props.setShop(null);
        props.setName("");
        props.setEmail("");
        props.setPhone("");
        props.setAddress("");
        toast.success("Order sent");
      } catch (error) {
        console.log(error.response);
      }
    } else {
      toast.error("Fill all filed to send order");
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
