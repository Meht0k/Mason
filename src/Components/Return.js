import React from 'react';
import './Css/Return.css';

const Return = () => {
  return (
    <>

      <div className="container-fluid Return px-1 py-5 px-md-3 px-lg-5">
        <div className="container">
          <div className="row py-5">
            <div className="col">
              <h1 className='display-6 text-center fw-normal'>Return policy</h1>
            </div>
          </div>
          <div className="row return-container pb-5">
            <div className="col">
              <p className='fs-6 fw-light'>Products must be returned within 14 days of receipt in order to qualify for a refund. The returns must be registered via our Return Portal. Here you can buy your return label and track your return at all times. Orders not sent through our return portal can unfortunately not be accepted.</p>
              <p className='py-2 fs-6 fw-light'>In order to qualify for a refund, the following rules apply:</p>
              {["Products must be unworn and accompanied by the original tags.", "Products must be returned in their original and undamaged shoebox.", "Returns must be provided with the completed Return Form.", "Shipping fees are non-refundable."].map((item) => {
                return (
                  <ul>
                    <li className=''>{item}</li>
                  </ul>
                )
              })}
              <p className='fs-6 fw-light'>If the returned products do not meet these requirements, they will not be accepted and will be sent back to you.</p>
              <p className='pt-2 fs-6 fw-light'>Returns are processed within 8 days of receipt. Please, note that it may take up to 5 days for the booking to appear on your account.</p>
              <hr />
              <p className='py-2 fw-light'>If you have any questions regarding your return, please contact our partner Returnista via:</p>
              <p>Phone: <a href='tel:' className='text-secondary'>+91 9773738110</a></p>
              <p>Mail: <a href='mailto:mehtabans70@gmail.com' className='text-secondary'>support@returnista.nl</a></p>
              <p>For any other questions, please contact us directly at <a href='mailto:mehtabans70@gmail.com' className='text-secondary'>customerservice@masongarments.com.</a></p>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default Return;