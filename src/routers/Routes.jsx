import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Root from "../root/Root";
import ProductDetails from "../componenets/ProductDetails/ProductDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/product-details/:id",
            element: <ProductDetails/>
        }
      ]
    },
  ]);

  export default router