import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";

const AppRoutes = ({ searchTerm }) => {
  return (
    <Routes>
      <Route path="/" element={<Home searchTerm={searchTerm} />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default AppRoutes;