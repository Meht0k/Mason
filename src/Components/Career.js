import React from 'react';
import './Css/Career.css';
import { Link } from 'react-router-dom';



const Career = () => {
  const img = "https://www.masongarments.com/cdn/shop/files/WoutervanderSar_23041400-08_2.jpg?v=1703234944&width=1000";
  return (
    <>
      <div className="container-fluid p-0 career">
        <div className="container-fluid p-5">

          <div className="row">
            <div className='col d-flex justify-content-end align-items-center px-5'>
              <div className='Career-box text-start w-50'>
                <h1 className='display-6  fw-normal '>Your Career at Mason Garments</h1>
                <p>Mason Garments is more than just a company to work for - it is a brand and product coming straight from our hearts. Mason Garments' brand identity is the core of the company and the high quality of product is always on top of our minds. We strive to improve each other and ourselves every day. Innovative ideas and input are greatly valued, and creativity is highly appreciated and stimulated. </p>
                <p>Despite growing fast internationally, Mason Garments still has a small team, where communication occurs by short lines. We all work under one roof in a beautifully renovated church. Conquering the international market results in new, exciting challenges every day, for which we all take our responsibilities with great passion.  </p>
                <p className='pt-3 pb-2 fw-semibold'>Vacancies:</p>
                <ul>
                  {["Store Mnager", "Assistant Store Manager", "Sales Associate"].map((item) => {
                    return (
                      <li>
                        <Link className='text-decoration-underline text-black'>{item}</Link>
                      </li>
                    )
                  })}
                </ul>


              </div>
            </div>
            <div className='col'>
              <img src={img} className="img-fluid" alt="..." />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Career;