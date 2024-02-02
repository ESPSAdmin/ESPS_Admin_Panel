import React from 'react'

const ProductInfo = () => {
  return (
    <>
      <form action="">
        <div className='form-group mb-2'>
          <label htmlFor="title" className='h6'>Product Name <sup className='text-danger'>*</sup></label>
          <input type="text" className='form-control' />
        </div>
        <div className='form-group mb-2'>
          <label htmlFor="title" className='h6'>Product Category <sup className='text-danger'>*</sup></label>
          <select name="" id="" className='form-select'>
            <option selected disabled>choose category</option>
            <option value="">Home & Decor</option>
          </select>
        </div>
        <div className='form-group mb-2 row'>
          <div className='col-lg'>
            <label htmlFor="title" className='h6'>Product Price <sup className='text-danger'>*</sup></label>
            <input type="text" className='form-control' />
          </div>
          <div className='col-lg'>
            <label htmlFor="title" className='h6'>Product Discount</label>
            <input type="text" className='form-control' />
          </div>
        </div>
        <div className='form-group mb-2 row'>
          <div className='col-lg'>
            <label htmlFor="title" className='h6'>Product Color <sup className='text-danger'>*</sup></label>
            <input type="text" className='form-control' />
          </div>
          <div className='col-lg'>
            <label htmlFor="title" className='h6'>Product Size <sup className='text-danger'>*</sup></label>
            <input type="text" className='form-control' />
          </div>
        </div>
        <div className='form-group mb-2 row'>
          <div className='col-lg'>
            <label htmlFor="title" className='h6'>Product Material <sup className='text-danger'>*</sup></label>
            <input type="text" className='form-control' />
          </div>
          <div className='col-lg'>
            <label htmlFor="title" className='h6'>Product Brand</label>
            <input type="text" className='form-control' />
          </div>
        </div>
        <div className='form-group mb-2'>
          <label htmlFor="title" className='h6'>Product Description <sup className='text-danger'>*</sup></label>
          <textarea  className='form-control' />
        </div>
        <div className='form-group d-flex gap-3 mb-2'>
          <button className='btn btn-primary'>Save details</button>
          <button className='btn btn-secondary'>Save Draft</button>
        </div>
      </form>
    </>
  )
}

export default ProductInfo