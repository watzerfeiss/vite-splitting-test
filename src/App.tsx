import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";

const AdminSection = React.lazy(() => import("./sections/AdminSection"));
const SupportSection = React.lazy(() => import("./sections/SupportSection"));
const PublisherSection = React.lazy(
  () => import("./sections/PublisherSection")
);
const PublisherDashboard = React.lazy(
  () => import("./components/PublisherDashboard")
);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "workspace",
        element: <PublisherSection />,
        children: [
          {
            path: "dashboard",
            element: <PublisherDashboard />,
          },
        ],
      },

      {
        path: "admin",
        element: <AdminSection />,
      },

      {
        path: "support",
        element: <SupportSection />,
      },
    ],
  },

  {
    path: "*",
    element: <strong>404 Not Found</strong>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
