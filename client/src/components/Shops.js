import React, { useEffect } from "react";
import Item from "./Item";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

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
    if (props.orders == false) {
      return props.setShop(shop);
    }
    toast.warn(`You cannot change the shop while there are items in your cart`);
  };

  return (
    <div className="shops">
      <aside className="shops-list">
        <h2>Shops:</h2>
        <ul>
          {Object.keys(props.deliveryData).map((shop) => {
            if (shop !== "_id")
              return (
                <li key={shop} onClick={() => chooseShop(shop)}>
                  {shop}
                </li>
              );
          })}
        </ul>
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </aside>
      <main className="menu">
        {console.log(props.shop)}
        {props.shop &&
          props.deliveryData[props.shop]?.map((el) => (
            <Item key={el.id} item={el} addToOrders={props.addToOrders} />
          ))}
      </main>
    </div>
  );
}
