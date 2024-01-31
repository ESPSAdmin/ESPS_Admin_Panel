import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context'
import { toast } from 'react-toastify';

const Login = () => {
    const { loginHandler, token } = useAuthContext();
    const navigate = useNavigate()
    const [loginCredential, setLoginCredentials] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Login Credentials:", loginCredential);

        try {
            // Assuming loginHandler returns a promise
            await loginHandler(loginCredential);
            // Check if token is set after successful login
            if (token) {
                toast.success("login successfull")
                navigate('/dashboard');
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('An error occurred during login:', error);
        }
    };

    return (
        <div className='container-fluid bg-gradient-blue'>
            <div className='row justify-content-center align-items-center homepage'>
                <div className='col-md-4 bg-light py-4 px-4'>
                    <h1 className='text-primary'>Login here</h1>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group mb-3'>
                            <label htmlFor="username" className='h6'>Email / UserId</label>
                            <input
                                type="text"
                                name='username'
                                id='username'
                                className='form-control rounded-0'
                                value={loginCredential.email}
                                onChange={(e) => setLoginCredentials({
                                    ...loginCredential,
                                    email: e.target.value
                                })}
                            />
                        </div>
                        <div className='form-group mb-3'>
                            <label htmlFor="password" className='h6'>Password</label>
                            <input
                                type="password"
                                id='password'
                                name='password'
                                className='form-control rounded-0'
                                value={loginCredential.password}
                                onChange={(e) => setLoginCredentials({
                                    ...loginCredential,
                                    password: e.target.value
                                })}
                            />
                        </div>
                        <div className='form-group mb-3'>
                            <button type='submit' className='btn btn-primary rounded-0 w-100'>Log in</button>
                        </div>
                        <p className='d-flex flex-column'>
                            <Link className='nav-link text-primary'>Forgot password</Link>
                            <Link className='nav-link text-primary'>Help in sign in ?</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
