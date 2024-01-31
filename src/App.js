import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import { Index as Route } from './routes';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <ToastContainer hideProgressBar theme='dark' autoClose={2000} />
      <Route />
    </>
  );
}

export default App;
