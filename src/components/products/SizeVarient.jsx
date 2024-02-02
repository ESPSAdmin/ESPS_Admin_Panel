import React from 'react'
import { FaCirclePlus } from "react-icons/fa6";

const SizeVarient = () => {
  return (
    <>
        <div className='accordion py-3' id='accordionExample'>
            <h2 className='accordian-header'>
                <button className='accordion-button fs-4 fw-bold' type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Size Varients
                </button>
            </h2>
            <div className='accordion-collapse' id='collapseOne' data-bs-parent="#accordionExample">
                <div className='accordion-body'>
                    <form action="">
                        <div className='form-group mb-2 row'>
                            <div className='col-lg'>
                                <label htmlFor="" className='h6'>Product Size</label>
                                <input type="text" className='form-control' />
                            </div>
                            <div className='col-lg'>
                                <label htmlFor="" className='h6'>Product price</label>
                                <input type="text" className='form-control' />
                            </div>
                            <div className='box d-flex justify-content-center align-items-center py-3'>
                                <button className='btn btn-outline-secondary'><FaCirclePlus /> Add more field</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default SizeVarient