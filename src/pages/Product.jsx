import React from 'react'
import { AddProduct, ImgVarient, SizeVarient } from '../components'

const Product = () => {
  return (
    <>
      <div className='container-fluid homepage'>
        <h1>Add Products</h1>
        <AddProduct />
        <SizeVarient />
        <ImgVarient />
      </div>
    </>
  )
}

export default Product