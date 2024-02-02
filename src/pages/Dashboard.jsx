import React from 'react';
import { Link } from 'react-router-dom';
import { FaPowerOff } from 'react-icons/fa';
import { useAuthContext } from '../context';

const Dashboard = () => {
  const { logoutHandler } = useAuthContext();

  return (
    <div className="bg-primary">
      <div className="d-flex justify-content-between align-items-center px-3 py-2">
        <span className="fs-2 text-light">Admin</span>
        <button
          onClick={logoutHandler}
          className="btn btn-outline-light d-flex gap-2 align-items-center px-3 py-2 fw-bold rounded-4"
        >
          <FaPowerOff /> Logout
        </button>
      </div>
      <ul className="nav flex-column py-4">
        <li className="nav-item">
          <Link to="/dashboard/admin" className="nav-link text-light h6">
            Admin
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard/product" className="nav-link text-light h6">
            Product
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard/coupon" className="nav-link text-light h6">
            Coupon
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
