import { createBrowserRouter } from "react-router";
import RootLayout from "../components/layout/RootLayout";
import Home from "../pages/Home/Home/Home";
import Products from "../pages/Products/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "products",
        Component: Products,
      },
    ],
  },
]);
