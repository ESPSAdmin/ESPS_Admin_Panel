import React from 'react'
import { FaCirclePlus } from "react-icons/fa6";

const ProductImg = () => {
  return (
    <>
       <div className='accordion' id='accordionExample' enctype="multipart/form-data">
            <h2 className='accordian-header'>
                <button className='accordion-button fs-4 fw-bold' type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Add Images
                </button>
            </h2>
            <div className='accordion-collapse' id='collapseTwo' data-bs-parent="#accordionExample">
                <div className='accordion-body'>
                    <form action="">
                        <div className='form-group mb-2 row'>
                            <div className='col-lg'>
                                <label htmlFor="" className='h6'>Product Image</label>
                                <input type="file" name="avatar" className='form-control' />
                            </div>
                            <div className='box d-flex justify-content-center align-items-center py-3'>
                                <button className='btn btn-outline-secondary'><FaCirclePlus /> Add more field</button>
                            </div>
                        </div>
                        <div className='form-group d-flex gap-3 mb-2'>
                            <button className='btn btn-primary'>Save details</button>
                            <button className='btn btn-secondary'>Save Draft</button>
                        </div>
                    </form>
                </div>
            </div>
        </div> 
    </>
  )
}

export default ProductImg