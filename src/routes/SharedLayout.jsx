import React from 'react'
import { Dashboard } from '../pages'
import { Outlet } from 'react-router-dom'

const SharedLayout = () => {
  
  return (
    <>
        <div className='row'>
          <div className='col-3 bg-primary'><Dashboard /></div>
          <div className='col'><Outlet /></div>
        </div>
    </>
  )
}

export default SharedLayout