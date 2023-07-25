import { createBrowserRouter } from "react-router-dom";
import { MainTemplate } from "../ds/templates";
import ProductsRoute from "../products/ProductsRoute";
import OrdersRoute from "../orders/OrdersRoute";
import ProductRoute from "../products/ProductRoute";
import { Page } from "../ds/pages";

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
        element: <Page title="Financial" />,
      },
      {
        path: "reports",
        element: <Page title="Reports" />,
      },
      {
        path: "messages",
        element: <Page title="Messages" />,
      },
      {
        path: "marketplaces",
        element: <Page title="Marketplaces" />,
      },
    ],
  },
]);
