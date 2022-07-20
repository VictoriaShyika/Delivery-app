import React, { useState } from "react";
import { MdClose } from "react-icons/md";

import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";
import Input from "./UI/Input";
import Button from "./UI/Button";

export default function Order(props) {
  let priceEquation = (props.item.price * props.item.quantity).toFixed(2);
  const [quantity, setQuantity] = useState(props.item.quantity);
  const [price, setPrice] = useState(priceEquation);

  const onMinesQuantity = () => {
    if (quantity > 1) {
      setQuantity((props.item.quantity -= 1));
    }
    setPrice(price);
    localStorage.setItem("order-list", JSON.stringify(props.orders));
    props.setListener(!props.listener);
  };
  const onAddQuantity = () => {
    if (quantity < 101) {
      setQuantity((props.item.quantity += 1));
    }
    setPrice(price);
    localStorage.setItem("order-list", JSON.stringify(props.orders));
    props.setListener(!props.listener);
  };

  const onType = (e) => {
    if (e.target.value < 101) {
      setQuantity((props.item.quantity = Number(e.target.value)));
    }
    setPrice(price);
    localStorage.setItem("order-list", JSON.stringify(props.orders));
    props.setListener(!props.listener);
  };

  return (
    <div className="item">
      <img src={"./img/" + props.item.img} alt={props.item.desc} />
      <h2>{props.item.title}</h2>
      <div className="control">
        <div>
          <Button className={"dect-inc-btn"} onClick={() => onMinesQuantity()}>
            <HiOutlineMinus />
          </Button>
          <Input
            className={"quantity-input"}
            type={"number"}
            min={1}
            max={100}
            value={quantity}
            onChange={(e) => onType(e)}
          />
          <Button className={"dect-inc-btn"} onClick={() => onAddQuantity()}>
            <HiOutlinePlus />
          </Button>
        </div>
        <b>{priceEquation} грн</b>
      </div>

      <MdClose
        className="delete-icon"
        onClick={() => props.onDelete(props.item.id)}
      />
    </div>
  );
}
