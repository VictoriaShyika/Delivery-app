import { Route, Routes } from "react-router-dom";
import ShoppingCart from "./components/ShoppingCart";
import Shops from "./components/Shops";
import NavBar from "./components/NavBar";
import { useState } from "react";

function App() {
  const [shop, setShop] = useState(null);

  return (
    <div className="App">
      <NavBar shop={shop} />
      <Routes>
        <Route path="/shops" element={<Shops shop={shop} setShop={setShop} />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </div>
  );
}

export default App;
