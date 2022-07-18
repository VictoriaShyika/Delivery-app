import { Route, Routes } from "react-router-dom";
import ShoppingCart from "./components/ShoppingCart";
import Shops from "./components/Shops";
import NavBar from "./components/NavBar";
import { useState } from "react";

function App() {
  const [shop, setShop] = useState(null);
  const [orders, setOrders] = useState([]);

  const addToOrders = (item) => {
    let isInArray = false;
    orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
        el.quantity += 1;
      }
    });

    if (!isInArray) {
      setOrders([item, ...orders]);
      item.quantity = 1;
    }
    console.log("Orders: ", orders);
  };

  const onDelete = (id) => {
    setOrders(orders.filter((el) => el.id !== id));
  };

  return (
    <div className="App">
      <NavBar shop={shop} />
      <Routes>
        <Route
          path="/shops"
          element={
            <Shops shop={shop} setShop={setShop} addToOrders={addToOrders} />
          }
        />
        <Route
          path="/cart"
          element={<ShoppingCart orders={orders} onDelete={onDelete} />}
        />
      </Routes>
    </div>
  );
}

export default App;
