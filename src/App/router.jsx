import { createBrowserRouter } from "react-router-dom";
import { MainTemplate } from "../ds/templates";
import ProductsRoute from "../products/ProductsRoute";
import OrdersRoute from "../orders/OrdersRoute";
import ProductRoute from "../products/ProductRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainTemplate />,
    children: [
      {
        index: true,
        element: <ProductsRoute />,
      },
      {
        path: "products",
        element: <ProductsRoute />,
      },
      {
        path: "products/:id",
        element: <ProductRoute />,
      },
      {
        path: "orders",
        element: <OrdersRoute />,
      },
      {
        path: "financial",
        element: <div>Financial</div>,
      },
      {
        path: "reports",
        element: <div>Reports</div>,
      },
      {
        path: "messages",
        element: <div>Messages</div>,
      },
      {
        path: "marketplaces",
        element: <div>Marketplaces</div>,
      },
    ],
  },
]);
