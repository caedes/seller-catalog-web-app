import { createBrowserRouter } from "react-router-dom";
import { MainTemplate } from "../ds/templates";
import ProductsPage from "../products/ProductsPage";
import OrdersPage from "../orders/OrdersPage";
import ProductPage from "../products/ProductPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainTemplate />,
    children: [
      {
        index: true,
        element: <ProductsPage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "products/:id",
        element: <ProductPage />,
      },
      {
        path: "orders",
        element: <OrdersPage />,
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
