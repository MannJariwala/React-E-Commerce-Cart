// src/components/Header.jsx
import { Link } from "react-router";
import { useCart } from "../Contexts/CartContext";

export default function Header() {
  const { cartData } = useCart();
  return (
    <header className="bg-white shadow sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          ShopEasy
        </Link>
        <nav className="space-x-6 flex items-center">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Products
          </Link>
          <Link
            to="/cart"
            className="text-gray-700 hover:text-blue-600 relative"
          >
            🛒
            <span
              className={` ${
                cartData.length > 0
                  ? "absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5"
                  : ""
              } `}
            >
              {cartData.length > 0 ? cartData.length : ""}
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
