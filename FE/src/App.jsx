/* eslint-disable no-unused-vars */
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import AccountPage from "./pages/account";

function App() {
  const router = createBrowserRouter([
    {
      //đường dẫn
      path: "",
      element: <HomePage />, //ndung đường dẫn hiển thị
    },
    {
      //đường dẫn
      path: "login",
      element: <LoginPage />, //ndung đường dẫn hiển thị
    },
    {
      //đường dẫn
      path: "register",
      element: <RegisterPage />, //ndung đường dẫn hiển thị
    },
    {
      //đường dẫn
      path: "account",
      element: <AccountPage />, //ndung đường dẫn hiển thị
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
