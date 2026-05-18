import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">

      <h1 className="text-xl font-bold">
        EquiCart
      </h1>

      <div className="space-x-4">

        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/products">
          Products
        </Link>

        <Link to="/orders">
          Orders
        </Link>

        <Link to="/profile">
          Profile
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;