import React from 'react';
import './Css/Signup.css';
import { Link } from 'react-router-dom';



const Signup = () => {
  return (
    <>

      <div className="container-fluid" id="Signup">
        <div className="row">
          <div className="col">
            <form className='signupForm'>
              <form>
                <p className='fs-3 text-center text-black'>Sign up</p>
                <p className='text-center text-black'>Please fill in the information below:</p>
                <div class="my-4">
                  <input type="text" class="form-control shadow-none border-secondary border-opacity-25 bg-transparent rounded-1 py-2" placeholder="First name" />
                </div>
                <div class="my-4">
                  <input type="text" class="form-control shadow-none border-secondary border-opacity-25 bg-transparent rounded-1 py-2" placeholder="Last name" />
                </div>
                <div class="my-4">
                  <input type="email" class="form-control shadow-none border-secondary border-opacity-25 bg-transparent rounded-1 py-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-mail" />
                </div>
                <div class="my-4">
                  <input type="password" class="form-control shadow-none border-secondary border-opacity-25 bg-transparent rounded-1 py-2" id="exampleInputPassword1" placeholder='Password' />
                </div>
                <div class="my-3 form-check">
                  <input type="checkbox" class="form-check-input shadow-none rounded-1 border-secondary border-opacity-25 bg-transparent" id="exampleCheck1" />
                  <label class="form-check-label" for="exampleCheck1"  style={{ fontSize: ".8rem" }}>Register to our newsletter</label>
                </div>


                <button type="submit" class="btn w-100 Signup-btn shadow-none border-secondary border-opacity-25 bg-transparent rounded-1 py-3 text-uppercase">create account</button>
              </form>
              <p className='text-secondary my-2 text-center' style={{ fontSize: ".8rem" }}>Already have an account? <Link to="/Login" className='text-secondary sign-btn text-decoration-none'>Login</Link></p>
            </form>
          </div>
        </div>
      </div>



    </>
  )
}

export default Signup;
