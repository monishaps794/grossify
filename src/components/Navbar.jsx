import { Link } from "react-router-dom";
import useCartStore from "../store/cartStore";

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const cart = useCartStore((state) => state.cart);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Grossify</Link>
      </div>

      <div className="search-box">
        <input
          placeholder="Search groceries..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="nav-right">
        <Link to="/cart" className="cart-btn">
          🛒 Cart ({cart.length})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;