import { Route, Routes } from "react-router-dom";
import ShoppingCart from "./components/ShoppingCart";
import Shops from "./components/Shops";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [shop, setShop] = useState(
    JSON.parse(localStorage.getItem("shop")) || null
  );
  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("order-list")) || []
  );
  const [deliveryData, setDeliveryData] = useState({});

  useEffect(() => {
    localStorage.setItem("order-list", JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem("shop", JSON.stringify(shop));
    console.log(shop);
  }, [shop]);

  const addToOrders = (item) => {
    let isInArray = false;
    orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
        el.quantity += 1;
        toast.success(`${item.title} added to cart.`);
      }
    });

    if (!isInArray) {
      setOrders([item, ...orders]);
      item.quantity = 1;
      toast.success(`${item.title} added to cart.`);
    }
  };

  const onDelete = (id) => {
    setOrders(orders.filter((el) => el.id !== id));

    if (orders.length === 1) {
      setShop(null);
    }
  };

  return (
    <div className="App">
      <NavBar shop={shop} />
      <Routes>
        <Route
          path="/"
          element={
            <Shops
              shop={shop}
              setShop={setShop}
              addToOrders={addToOrders}
              deliveryData={deliveryData}
              setDeliveryData={setDeliveryData}
              orders={orders}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <ShoppingCart
              orders={orders}
              setOrders={setOrders}
              onDelete={onDelete}
              setShop={setShop}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
