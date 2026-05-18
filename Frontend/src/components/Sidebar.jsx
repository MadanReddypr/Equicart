import { Link } from "react-router-dom";

function Sidebar() {

  return (

    <div className="w-60 bg-gray-800 text-white h-screen p-4">

      <ul className="space-y-4">

        <li>
          <Link to="/dashboard">
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/products">
            Products
          </Link>
        </li>

        <li>
          <Link to="/orders">
            Orders
          </Link>
        </li>

        <li>
          <Link to="/admin">
            Admin
          </Link>
        </li>

      </ul>

    </div>

  );
}

export default Sidebar;