import React from 'react';
import './Css/Notice.css';

const Notice = () => {










  return (
    <>
      <div className="container-fluid py-5 px-0 px-lg-5 Notice">
        <div className="container py-5">
          <div className="row">
            <div className="col">
              <h1 className='text-center fw-normal display-6'>Legal notice</h1>
            </div>
          </div>
          <div className="row pt-5 row-cols-1 in-container">
            <div className="col py-4">
              <h1 className='fs-5 pb-2'>Disclaimer</h1>
              <p className='fs-6 fw-light'>By visiting and using this website www.masongarments.com you agree to be bound by this disclaimer and the conditions contained in this disclaimer.</p>
            </div>
            <div className="col py-4">
              <h1 className='fs-5 pb-2'>Information and referrals</h1>
              <p className='fs-6 fw-light'>All information provided on or through this website is of a general nature, no rights can be derived from this. Upon composing and maintaining this website Mason Garments B.V. acts very carefully. The sources and references have also been examined by Mason Garments B.V. for reliability. Despite such care, Mason Garments B.V. cannot guarantee the correctness, completeness, and timeliness of the information. Mason Garments B.V. expressly rejects any liability for the accuracy, completeness, timeliness of the information and the use of this website. The information on and through this website offered by Mason Garments B.V. can be printed or downloaded for personal use. However, it is strictly prohibited to disclose, copy or distribute this information or take any other action that is inconsistent with the intellectual property rights of Mason Garments B.V..</p>
            </div>
            <div className="col py-4">
              <h1 className='fs-5 pb-2'>Modifications</h1>
              <p className='fs-6 fw-light'>All the information offered by Mason Garments B.V. on or through this website may be changed without notice. The text of this disclaimer is also subject to change without notice. Mason Garments B.V. encourages you to check regularly if the offered information and the text of this disclaimer has been modified.</p>
            </div>
            <div className="col">
              <h1 className='fs-5'>Applicable law</h1>
              <p className='fs-6 fw-light'>The Dutch law is exclusively applicable to this website and disclaimer. Disputes are submitted to the competent court in the Netherlands.</p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Notice;