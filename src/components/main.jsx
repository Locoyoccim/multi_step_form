import React from "react";
import ReactDOM from "react-dom/client";
import "/src/styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Plan from "./Plan";
import Addon from "./Addon.jsx";
import UserInfo from "/src/components/UserInfo.jsx";
import App from "/src/components/App.jsx";
import Finish from "./Finish.jsx";
import Thanks from "./Thanks.jsx";
import Memoria from "./Memoria.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        Component: UserInfo,
      },
      {
        path: "/plan",
        element: <Plan />,
      },
      {
        path: "/add-ons",
        element: <Addon />,
      },
      {
        path: "/buy_detail",
        element: <Finish />,
      },
      {
        path: "/thanks",
        element: <Thanks />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Memoria>
      <RouterProvider router={router} />
    </Memoria>
  </React.StrictMode>
);
