import { Route, Routes } from "react-router-dom";
import ShoppingCart from "./components/ShoppingCart";
import Shops from "./components/Shops";
import NavBar from "./components/NavBar";

function App() {
  return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/shops" element={<Shops/>} />
          <Route path="/cart" element={<ShoppingCart/>} />
        </Routes>
      </div>
  );
}

export default App;
