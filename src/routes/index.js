import React from "react";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./SharedLayout";
import { Admin, Home, Login, Product } from "../pages";
import { useAuthContext } from "../context";

const Index = () => {
  const { token } = useAuthContext();

  if (!token) {
    return (
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Home />} />
      </Routes>
    );
  }

  return (
    <>
      <Routes>
        <Route element={<SharedLayout />}>
          <Route path="dashboard/admin" element={<Admin />} />
          <Route path="dashboard/product" element={<Product />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
};

export { Index };
