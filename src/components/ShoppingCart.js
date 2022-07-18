import React from "react";
import Input from "./UI/Input";

export default function ShoppingCart() {
  return (
    <div className="shopping-cart">
      <aside className="personal-data">
        <form>
          <div className="input-ccontainer">
            <label for="name">Name: </label>
            <Input type="text" id="name" name="name" />
          </div>
          <div className="input-ccontainer">
            <label for="email">Email: </label>
            <Input type="email" id="email" name="email" />
          </div>
          <div className="input-ccontainer">
            <label for="phone">Phone: </label>
            <Input type="phone" id="phone" name="phone" />
          </div>
          <div className="input-ccontainer">
            <label for="address">Address: </label>
            <Input type="text" id="address" name="address" />
          </div>
        </form>
      </aside>
      <main className="cart">
        <div className="cart-item"></div>
      </main>
    </div>
  );
}
