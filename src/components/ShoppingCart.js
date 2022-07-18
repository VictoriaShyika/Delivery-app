import React from "react";
import Input from "./UI/Input";

export default function ShoppingCart() {
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
        <div className="cart-item"></div>
      </main>
    </div>
  );
}
