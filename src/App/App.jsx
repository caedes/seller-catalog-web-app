import { RouterProvider } from "react-router-dom";
import "./app.css";
import { router } from "./router.jsx";

export default function App() {
  return <RouterProvider router={router} />;
}
