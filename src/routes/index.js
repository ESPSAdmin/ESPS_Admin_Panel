import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import { Admin, Home, Login, Product } from '../pages';

const Index = () => {

  // If token is not available, redirect to login
  // if (!token) {
  //   return <Navigate to="/login" />;
  // }

  return (
    <>
      <Routes>
        <Route element={<SharedLayout />}>
          <Route path='dashboard/admin' element={<Admin />} />
          <Route path='dashboard/product' element={<Product />} />    
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
};

export { Index };
