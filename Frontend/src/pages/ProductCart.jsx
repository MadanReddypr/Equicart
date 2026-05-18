import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="border rounded-lg shadow-md p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-52 object-cover rounded"
      />

      <h2 className="text-xl font-bold mt-3">
        {product.name}
      </h2>

      <p className="text-gray-500">
        {product.category}
      </p>

      <p className="text-green-600 font-semibold mt-2">
        ₹ {product.price}
      </p>

      <button
        onClick={() => navigate(`/products/${product.id}`)}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
      >
        View Details
      </button>
    </div>
  );
};

export default ProductCard;