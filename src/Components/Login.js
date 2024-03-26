import React from 'react';
import './Css/Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <div className='container-fluid p-0' id="login">
                <div className='row'>
                    <div className='col'>
                        <form className='loginForm'>
                            <form>
                                <p className='fs-3 text-center text-black'>Login</p>
                                <p className='text-center text-black'>Enter your email and password to login:</p>
                                <div class="my-4">
                                    <input type="email" class="form-control shadow-none border-secondary border-opacity-25 bg-transparent rounded-1 py-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-mail" />
                                </div>
                                <div class="my-4">
                                    <input type="password" class="form-control shadow-none border-secondary border-opacity-25 bg-transparent rounded-1 py-2" id="exampleInputPassword1" placeholder='Password' />
                                </div>
                                <div class="my-3 form-check p-0">
                                    <Link to="/Recover" className=' text-secondary text-decoration-none' style={{fontSize: ".8rem"}}>Forgot your password?</Link>
                                </div>
                                <button type="submit" class="btn w-100 Login-btn shadow-none border-secondary border-opacity-25 bg-transparent rounded-1 py-3 text-uppercase">Login</button>
                            </form>
                            <p className='text-secondary my-2 text-center' style={{ fontSize: ".8rem" }}>Don't have an account? <Link to="/Signup" className='text-secondary logSign-btn text-decoration-none'>Sign Up</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login