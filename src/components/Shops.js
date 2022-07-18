import React from "react";
import { deliveryData } from "../data";
import Item from "./Item";

export default function Shops(props) {

  const chooseShop = (shop) => {
    props.setShop(shop);
  };

  return (
    <div className="shops">
      <aside className="shops-list">
        <h2>Shops:</h2>
        <ul>
          {Object.keys(deliveryData).map((shop) => {
            return (
              <li key={shop} onClick={() => chooseShop(shop)}>
                {shop}
              </li>
            );
          })}
        </ul>
      </aside>
      <main className="menu">
        {props.shop && deliveryData[props.shop].map((el) => <Item key={el.id} item={el} />)}
      </main>
    </div>
  );
}
