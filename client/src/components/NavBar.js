import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div className="nav-bar">
      <Link className="link" to="/">
        Shops
      </Link>
      <Link className="link" to="/cart">
        Shopping Cart
      </Link>
      <span>{props.shop}</span>
    </div>
  );
}
