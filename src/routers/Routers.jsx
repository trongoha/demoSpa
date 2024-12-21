import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "../pages/About";
import Cart from "../pages/Carts";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Service from "../pages/Service";
import NotFound from "../components/shared/NotFound";
import AdminHome from "../pages/admin/home/Home";
import AdminLogin from "../pages/admin/login/Login";
import AdminUser from "../pages/admin/list/user/User";
import AdminProduct from "../pages/admin/list/Product";
import AdminCart from "../pages/admin/list/Cart";
import "../pages/admin/style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "../components/admin/context/darkModeReducer";
import AdminSetting from "../pages/admin/setting/Setting";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ServicePost from "../components/servicepost/ServicePost";
import Booking from "../components/booking/Booking";
import ProductDetails from "../components/productdetails/ProductDetails";
import EditUser from "../pages/admin/list/user/EditUser";
import AdminService from "../pages/admin/list/services/Service";
import EditService from "../pages/admin/list/services/EditService";
import AdminServiceType from "../pages/admin/list/servicetype/ServiceType";
import EditServiceType from "../pages/admin/list/servicetype/EditServiceType";
import AdminSupport from "../pages/admin/list/support/Support";
import AdminBooking from "../pages/admin/list/booking/Booking";
import EditBooking from "../pages/admin/list/booking/EditBooking";
// import RegisterSupport from ".././components/booking/RegisterSupport";

function Routers() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <BrowserRouter>
      <div className={darkMode ? "app dark" : "app"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/service/:slug" element={<ServicePost />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/service/booking" element={<Booking />} />
          <Route path="/product/:slug" element={<ProductDetails />} />
          {/* <Route path="/registerSupport" element={<RegisterSupport />} /> */}

          <Route path="/" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/admin/users" element={<AdminUser />} />
          <Route path="/admin/users/edit" element={<EditUser />} />
          <Route path="/admin/users/edit/:id" element={<EditUser />} />

          <Route path="/admin/products" element={<AdminProduct />} />
          <Route path="/admin/cart" element={<AdminCart />} />
          <Route path="/admin/setting" element={<AdminSetting />} />
          <Route path="/admin/service" element={<AdminService />} />
          <Route path="/admin/service/edit" element={<EditService />} />
          <Route path="/admin/service/edit/:id" element={<EditService />} />

          <Route path="/admin/servicetype" element={<AdminServiceType />} />
          <Route path="/admin/servicetype/edit" element={<EditServiceType />} />
          <Route
            path="/admin/servicetype/edit/:id"
            element={<EditServiceType />}
          />

          <Route path="/admin/support" element={<AdminSupport />} />

          <Route path="/admin/booking" element={<AdminBooking />} />
          <Route path="/admin/booking/edit" element={<EditBooking />} />
          <Route path="/admin/booking/edit/:id" element={<EditBooking />} />

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Routers;
