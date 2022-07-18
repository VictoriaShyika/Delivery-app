import React from "react";
import CartContent from "./CartContent";
import Input from "./UI/Input";

export default function ShoppingCart(props) {
  const showNothing = () => {
    return (
      <div className="empty">
        <h2>Cart is empty.</h2>
      </div>
    );
  };
  return (
    <div className="shopping-cart">
      <aside className="personal-data">
        <div className="input-ccontainer">
          <label htmlFor="name">Name: </label>
          <Input type="text" id="name" name="name" />
        </div>
        <div className="input-ccontainer">
          <label htmlFor="email">Email: </label>
          <Input type="email" id="email" name="email" />
        </div>
        <div className="input-ccontainer">
          <label htmlFor="phone">Phone: </label>
          <Input type="phone" id="phone" name="phone" />
        </div>
        <div className="input-ccontainer">
          <label htmlFor="address">Address: </label>
          <Input type="text" id="address" name="address" />
        </div>
      </aside>
      <main className="cart">
        <div className="cart-item">
          {props.orders.length ? (
            <CartContent orders={props.orders} onDelete={props.onDelete} />
          ) : (
            showNothing()
          )}
        </div>
      </main>
    </div>
  );
}
