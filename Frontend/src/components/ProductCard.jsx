import ProductCard from "../pages/ProductCart";

function CartCard({ item }) {

  return (

    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
        borderRadius: "10px"
      }}
    >

      <h3>{item.name}</h3>

      <p>₹ {item.price}</p>

    </div>

  );

}

export default ProductCard;