import App from "@/App";
import AllProducts from "@/pages/allProducts/AllProducts";
import Cart from "@/pages/cart/Cart";
import CartChecout from "@/pages/cart/CartChecout";
import Home from "@/pages/home/Home";
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
        path: "/products/:_id",
        element: <ProductDetails />,
      },
      {
        path: "/products/manage",
        element: <ProductManage />,
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
]);
