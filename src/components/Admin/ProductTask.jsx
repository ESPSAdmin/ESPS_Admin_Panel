import React from 'react'
import { Link } from 'react-router-dom'

const ProductTask = () => {
  return (
    <>
        <table className='table'>
            <thead>
                <tr>
                    <th scope='col'>Title</th>
                    <th scope='col'>Status</th>
                    <th scope='col'>Updated at</th>
                    <th scope='col'>Activity</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>product title</td>
                    <td>added product</td>
                    <td>01-02-2024 13:57</td>
                    <td className='d-flex gap-3'>
                        <Link className='nav-link'>View</Link>
                        <Link className='nav-link'>Edit</Link>
                        <Link className='nav-link'>Remove</Link>
                    </td>
                </tr>
            </tbody>
        </table>
    </>
  )
}

export default ProductTask