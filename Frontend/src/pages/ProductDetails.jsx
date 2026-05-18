import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/products/${id}`
      );

      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-10">

        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-lg"
        />

        <div>
          <h1 className="text-4xl font-bold">
            {product.name}
          </h1>

          <p className="mt-4 text-gray-600">
            {product.description}
          </p>

          <p className="text-2xl text-green-600 font-bold mt-6">
            ₹ {product.price}
          </p>

          <p className="mt-3">
            Category: {product.category}
          </p>

          <p className="mt-2">
            Stock: {product.stock}
          </p>

          <button className="bg-blue-600 text-white px-6 py-3 rounded mt-6">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;