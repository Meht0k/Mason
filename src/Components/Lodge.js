import React from 'react';
import './Css/Lodge.css';

const Lodge = () => {
  return (
    <>
      <div className="container-fluid p-0" id="LodgeHeader">
        <div className="row">
          <div className='col'>
            <div className='center'>
                <p className='fs-2 text-uppercase fw-normal text-white'>JOIN THE LODGE COMMUNITY</p>
                <p className='text-white'>Subscribe to our newsletters to be able to access private sale collection once it's open.</p>
                <div className='lodgeForm mt-4'>
                  <input className='bg-transparent border border-white w-100 text-white  rounded-1 p-3' placeholder="E-mail"/>
                  <button type="button" className="btn text-black bg-white w-50 rounded-2 p-3 text-uppercase border-3 border-white">Join</button>
                </div>
                </div> 
          </div>
        </div>
      </div>

    </>
  )
}

export default Lodge