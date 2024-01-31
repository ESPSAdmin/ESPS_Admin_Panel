import React from 'react'
import { Link } from 'react-router-dom'
import { FaPowerOff } from "react-icons/fa";

const Dashboard = () => {
  return (
    <>
          <div className="bg-primary">
            <div className='d-flex justify-content-between align-items-center px-3 py-2'>
              <span className='fs-2 text-light'>Admin</span>
              <Link className='text-light d-flex gap-2 align-items-center px-3 py-2 border border-light nav-link fw-bold rounded-4'><FaPowerOff /> Logout</Link>
            </div>
            <ul className='nav flex-column py-4'>
              <li className='nav-item'>
                <Link to='/dashboard/admin' className='nav-link text-light h6'>Admin</Link>
              </li>
              <li className='nav-item'>
                <Link to='/dashboard/product' className='nav-link text-light h6'>Product</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link text-light h6'>Coupon</Link>
              </li>
            </ul>
          </div>
    </>
  )
}

export default Dashboard