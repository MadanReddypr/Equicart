import {Routes,Route} from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";

import ProtectedRoute from "../components/ProtectedRoute";

function AppRoutes(){

return(

<Routes>

<Route path="/login" element={<Login/>}/>

<Route path="/register" element={<Register/>}/>

<Route
path="/dashboard"
element={
<ProtectedRoute>
<Dashboard/>
</ProtectedRoute>
}
/>

<Route
path="/products"
element={
<ProtectedRoute>
<Products/>
</ProtectedRoute>
}
/>

</Routes>

)

}

export default AppRoutes