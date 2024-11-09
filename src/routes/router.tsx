import App from "@/App";
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import AboutUs from "@/pages/AboutUs/AboutUs";
import AllProducts from "@/pages/allProducts/AllProducts";
import Cart from "@/pages/cart/Cart";
import CartChecout from "@/pages/cart/CartChecout";
import CategoryProducts from "@/pages/CategoryProducts/CategoryProducts";
import ContactUs from "@/pages/ContactUs/ContactUs";
import Dashboard from "@/pages/Dashboard/Dashboard";
import WeclomeToDashboard from "@/pages/Dashboard/WeclomeToDashboard";

import Home from "@/pages/home/Home";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Login/Register";
import PlantCareDetails from "@/pages/PlantCareDetails/PlantCareDetails";
import ProductDetails from "@/pages/ProductDetails/ProductDetails";
import ProductManage from "@/pages/productManage/ProductManage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <AllProducts />,
      },
      {
        path: "/plant-care",
        element: <PlantCareDetails />,
      },
      {
        path: "/products/:_id",
        element: <ProductDetails />,
      },
     
      {
        path: "/category/:category",
        element: <CategoryProducts />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <CartChecout />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <WeclomeToDashboard/>
      },
      {
        path: "product-manage",
        element: <ProductManage />,
      },
    
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
