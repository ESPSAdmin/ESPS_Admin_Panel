import React from 'react'
import { FiClock } from "react-icons/fi";
import { ProductTask } from '../components';

const Admin = () => {
  return (
    <>
      <div className='container-fluid homepage'>
        <h4 className='py-2'><FiClock /> Recently activity</h4>
        <ProductTask />
      </div>
    </>
  )
}

export default Admin