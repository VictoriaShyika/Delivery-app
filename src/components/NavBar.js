import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <Link className="link" to="/shops" >Shops</Link>
      <Link className="link" to="/cart">Shopping Cart</Link>
    </div>
  );
}
