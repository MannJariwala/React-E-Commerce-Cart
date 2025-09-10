import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useCart } from "./Contexts/CartContext";
import Swal from "sweetalert2";

function SingleProduct() {
  let [counter, setCounter] = useState(1);
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { addProduct } = useCart();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  const addCounter = () => {
    setCounter(++counter);
  };
  const subCounter = () => {
    setCounter(--counter);
  };

  if (!product)
    return <div className="text-center mt-10">No product found</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-80 object-contain"
      />
      <div>
        <h1 className="text-2xl font-bold mb-2" id={product.title}>
          {product.title}
        </h1>
        <div className="text-yellow-500 mb-2">
          ⭐ {product.rating?.rate || "4.5"} / 5
        </div>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <div
          className="text-2xl font-semibold text-blue-600 mb-6"
          id={product.price}
        >
          ${product.price}
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
          {/* Quantity Counter */}
          <div className="flex items-center border border-gray-300 rounded-md px-4 py-2">
            <button
              onClick={subCounter}
              className="text-xl text-blue-600 hover:text-blue-800 px-2 cursor-pointer"
            >
              -
            </button>
            <span className="mx-4 text-lg font-medium">{counter}</span>
            <button
              onClick={addCounter}
              className="text-xl text-blue-600 hover:text-blue-800 px-2 cursor-pointer"
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => {
              addProduct({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                quantity: counter,
              });

              Swal.fire({
                icon: "success",
                title: "Added to Cart!",
                text: `${product.title} has been added to your cart.`,
                timer: 1500,
                showConfirmButton: false,
              });
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md shadow"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
