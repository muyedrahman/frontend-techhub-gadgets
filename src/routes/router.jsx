// import { createBrowserRouter } from "react-router";
// import RootLayout from "../components/layout/RootLayout";
// import Home from "../pages/Home/Home/Home";
// import Products from "../pages/Products/Products";
// import ProductDetails from "../pages/ProductDetails/ProductDetails";
// import AdminLogin from "../pages/admin/AdminLogin/AdminLogin";
// import Dashboard from "../pages/admin/Dashboard/Dashboard";
// import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
// import AdminLayout from "../components/layout/AdminLayout";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: RootLayout,
//     children: [
//       {
//         index: true,
//         Component: Home,
//       },
//       {
//         path: "products",
//         Component: Products,
//       },
//       {
//         path: "products/:id",
//         Component: ProductDetails,
//       },
//       {
//         path: "admin/login",
//         Component: AdminLogin,
//       },
//       {
//         path: "admin",
//         element: (
//           <ProtectedRoute>
//             <AdminLayout />
//           </ProtectedRoute>
//         ),
//         children: [
//           { path: "dashboard", Component: Dashboard },
//           // AddProduct, ManageProducts পরের ধাপে এখানে যোগ হবে


//       // {
//       //   path: "admin/dashboard",
//       //   Component: () => (
//       //     <ProtectedRoute>
//       //       <Dashboard />
//       //    </ProtectedRoute>
//       //   ),
//       // },
//     ],
//   },
// ]);

// 2

import { createBrowserRouter } from "react-router";
import RootLayout from "../components/layout/RootLayout";
import AdminLayout from "../components/layout/AdminLayout";
import Home from "../pages/Home/Home/Home";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import AdminLogin from "../pages/admin/AdminLogin/AdminLogin";
import Dashboard from "../pages/admin/Dashboard/Dashboard";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import AddProduct from "../pages/admin/AddProduct/AddProduct";
import ManageProducts from "../pages/admin/ManageProducts/ManageProducts";
import EditProduct from "../pages/admin/EditProduct/EditProduct";
import About from "../pages/About/About";
import NotFound from "../pages/NotFound/NotFound";



export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      // {
      //   index: true,
      //   element: (
      //     <Suspense fallback={<Spinner />}>
      //       <Home />
      //     </Suspense>
      //   ),
      // },

      {
        index: true,
        Component: Home,
      },
      {
        path: "products",
        Component: Products,
      },
      {
        path: "products/:id",
        Component: ProductDetails,
      },
      {
        path: "admin/login",
        Component: AdminLogin,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "admin",
        element: (
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "dashboard",
            Component: Dashboard,
          },
          // AddProduct, ManageProducts পরের ধাপে এখানে যোগ হবে
          {
            path: "products/add",
            Component: AddProduct,
          },
          {
            path: "products/manage",
            Component: ManageProducts,
          },
          {
            path: "products/edit/:id",
            Component: EditProduct,
          },
        ],
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);
