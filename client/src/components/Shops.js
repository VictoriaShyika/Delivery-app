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
    // eslint-disable-next-line
    if (props.orders == false) {
      return props.setShop(shop);
    }
    toast.warn(`You cannot change the shop while there are items in your cart`);
  };

  return (
    <div className="shops" style={props.shop && { background: "#f3f3fb" }}>
      <aside className="shops-list">
        <h2>Shops:</h2>
        <ul>
          {
            // eslint-disable-next-line
            Object.keys(props.deliveryData).map((shop) => {
              if (shop !== "_id")
                return (
                  <li key={shop} onClick={() => chooseShop(shop)}>
                    {shop}
                  </li>
                );
            })
          }
        </ul>
        <ToastContainer
          position="bottom-left"
          autoClose={1000}
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
        {props.shop &&
          props.deliveryData[props.shop]?.map((el) => (
            <Item key={el.id} item={el} addToOrders={props.addToOrders} />
          ))}
      </main>
    </div>
  );
}
