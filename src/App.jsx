import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import MyState from "./context/myState";
import Order from "./pages/order/Order";
import NoPage from "../../vite-project/src/pages/nopage/Nopage";
import Cart from "./pages/cart/Cart";
import Dashboard from "../../vite-project/src/pages/admin/dashboard/Dashboard";
import ProductInfo from "./pages/productInfo/ProductInfo";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AddProduct from '../src/pages/admin/dashboard/page/Addproduct'
import UpdateProduct from "../src/pages/admin/dashboard/page/UpdateProduct";

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={
            <ProtectedRoutes>
              <Order />
            </ProtectedRoutes>
          } />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={
            <ProtectedRoutesForAdmin>
              <Dashboard />
              </ProtectedRoutesForAdmin>} />
          <Route path="/productinfo" element={<ProductInfo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addproduct" element={
            <ProtectedRoutesForAdmin>
              <AddProduct />
              </ProtectedRoutesForAdmin>} />
          <Route path="/updateproduct" element={
            <ProtectedRoutesForAdmin>
              <UpdateProduct />
              </ProtectedRoutesForAdmin>} />
          <Route path="/" element={<NoPage />} />
        </Routes>
        <ToastContainer/>
      </Router>
    </MyState>

  )
}

export default App

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('user')) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}

export const ProtectedRoutesForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  console.log(admin.user.email)
  if (admin.user.email === 'thisisahmer000@gmail.com') {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}