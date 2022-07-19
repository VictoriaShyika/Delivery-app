import React, { useEffect } from "react";
import Item from "./Item";
import axios from "axios";

export default function Shops(props) {
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("/delivery/data");
      const deliveryData = data.data.deliveryData["0"];
      props.setDeliveryData(deliveryData);
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  const chooseShop = (shop) => {
    props.setShop(shop);
  };

  return (
    <div className="shops">
      <aside className="shops-list">
        <h2>Shops:</h2>
        <ul>
          {Object.keys(props.deliveryData).map((shop) => {
            if (shop != "_id")
              return (
                <li key={shop} onClick={() => chooseShop(shop)}>
                  {shop}
                </li>
              );
          })}
        </ul>
      </aside>
      <main className="menu">
        {props.shop &&
          props.deliveryData[props.shop].map((el) => (
            <Item key={el.id} item={el} addToOrders={props.addToOrders} />
          ))}
      </main>
    </div>
  );
}
