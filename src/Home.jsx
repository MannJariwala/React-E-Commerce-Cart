import React, { useEffect, useState } from "react";
import { Link } from "react-router";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg"
        >
          <img
            src={product.image}
            alt={product.title}
            className="h-48 object-contain w-full mb-4"
          />
          <h2 className="text-lg font-semibold mb-1">{product.title}</h2>
          <div className="text-yellow-500 mb-2">
            ⭐ {product.rating?.rate || "4.5"}
          </div>
          <p className="text-gray-600 text-sm line-clamp-2 mb-2">
            {product.description}
          </p>
          <div className="font-bold text-lg text-blue-600 mb-4">
            ${product.price}
          </div>
          <Link
            to={`/product/${product.id}`}
            className="text-blue-500 hover:underline"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
