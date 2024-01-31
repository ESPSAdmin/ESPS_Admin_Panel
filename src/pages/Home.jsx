import React from 'react'
import logo_img from '../assets/DIGIUNCLE.png'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login')
  }
  return (
    <>
        <div className='homepage container-fluid'>
            <div className='row homepage'>
                <div className='col-lg-8 d-flex align-items-center justify-content-center'>
                    <div className='logo-img'>
                      <img src={logo_img} alt="" className='img-fluid' />
                    </div>
                </div> 
                <div className='col-lg-4 bg-secondary-subtle p-2 d-flex flex-column align-items-center justify-content-center'>
                  <h1>Welcome to DigiUncle</h1>
                  <button onClick={handleClick} className='btn btn-primary text-light fs-4 fw-bold'>Login</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home