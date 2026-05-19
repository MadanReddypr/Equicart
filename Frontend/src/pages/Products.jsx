import React, { useEffect, useState } from "react";

import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

const Products = () => {

  const [products, setProducts] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {

    const dummyProducts = [

      {
        id: 1,
        name: "Laptop",
        price: 50000,
        category: "Electronics",
        image: "https://via.placeholder.com/200"
      },

      {
        id: 2,
        name: "Phone",
        price: 30000,
        category: "Mobiles",
        image: "https://via.placeholder.com/200"
      }

    ];

    setProducts(dummyProducts);

    setFilteredProducts(dummyProducts);

  }, []);


  useEffect(() => {

    const filtered = products.filter(

      (product) =>

      product.name
        .toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        )

    );

    setFilteredProducts(filtered);

  }, [searchTerm, products]);


  return (

    <div style={{ padding: "20px" }}>

      <h1>Products</h1>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div>

        {

          filteredProducts.map(

            (product) => (

              <ProductCard
                key={product.id}
                product={product}
              />

            )

          )

        }

      </div>

    </div>

  );

};

export default Products;