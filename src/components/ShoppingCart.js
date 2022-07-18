import React, { useState } from "react";
import CartContent from "./CartContent";
import Input from "./UI/Input";

export default function ShoppingCart(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

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
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            type="text"
            id="name"
            name="name"
          />
        </div>
        <div className="input-ccontainer">
          <label htmlFor="email">Email: </label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            id="email"
            name="email"
          />
        </div>
        <div className="input-ccontainer">
          <label htmlFor="phone">Phone: </label>
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
            type="phone"
            id="phone"
            name="phone"
          />
        </div>
        <div className="input-ccontainer">
          <label htmlFor="address">Address: </label>
          <Input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
            type="text"
            id="address"
            name="address"
          />
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
