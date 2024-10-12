/* eslint-disable no-unused-vars */
import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import AccountPage from "./pages/account";
import Header from "./components/a-z_component/header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
