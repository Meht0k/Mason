import React from 'react';
import './Css/Accessories.css';
import { Link } from 'react-router-dom'
import Navbar from './Navbar';

const Accessories = () => {


  // accessProducts Array Object 
  const accessProducts = [
    {
      id: 1,
      imgUrl: "https://www.masongarments.com/cdn/shop/products/essential-kit-775407.jpg?v=1704786746&width=600",
      name: "Esssential",
      price: "2,000.00"
    },
    {
      id: 2,
      imgUrl: "https://www.masongarments.com/cdn/shop/products/suede-cleaning-kit-485417.jpg?v=1704786750&width=600",
      name: "Suede Cleaning Kit",
      price: "1,500.00"
    },
    {
      id: 3,
      imgUrl: "https://www.masongarments.com/cdn/shop/products/premium-shoe-cleaner-322652.jpg?v=1704786747&width=600",
      name: "Premium Shoe Cleaner",
      price: "2,000.00"
    },
    {
      id: 4,
      imgUrl: "https://www.masongarments.com/cdn/shop/products/repel-spray-456137.jpg?v=1704786747&width=600",
      name: "Repel Spray",
      price: "1,500.00"
    },
    {
      id: 5,
      imgUrl: "https://www.masongarments.com/cdn/shop/products/foam-shoe-cleaner-588674.jpg?v=1704786747&width=600",
      name: "Foam Shoe Cleaner",
      price: "1,900.00"
    },
    {
      id: 6,
      imgUrl: "https://www.masongarments.com/cdn/shop/products/travel-shoe-cleaning-kit-836639.jpg?v=1704786749&width=600",
      name: "Travel Shoe Cleaning Kit",
      price: "2,700.00"
    },
    {
      id: 7,
      imgUrl: "https://www.masongarments.com/cdn/shop/products/cesare-tonale-black-289700.jpg?v=1703046703&width=600",
      name: "Cesare Tonale Black",
      price: "13,700.00"
    },
    {
      id: 8,
      imgUrl: "https://www.masongarments.com/cdn/shop/products/cesare-universale-black-111379.jpg?v=1703046703&width=600",
      name: "Cesare Universale Black",
      price: "13,700.00"
    },
    {
      id: 9,
      imgUrl: "https://www.masongarments.com/cdn/shop/products/gift-card-304405.png?v=1705449579&width=600",
      name: "Gift Card",
      price: "2,300.00"
    },
    {
      id: 10,
      imgUrl: "https://www.masongarments.com/cdn/shop/products/mystery-box-2-pairs-592468.png?v=1705449579&width=600",
      name: "Mystery Box 2 Pairs",
      price: "26,900.00"
    }
  ];



  // Accordian Array Object 
  const Accordian = [
    {
      id: 1,
      name: "Color",
      target: "#collapseOne",
      controls: "collapseOne",
      idName: "collapseOne",
      other: {
        value: "Black"
      }
    },
    {
      id: 2,
      name: "Size",
      target: "#collapseTwo",
      controls: "collapseTwo",
      idName: "collapseTwo",
      other: {
        value: ""
      }
    },
    {
      id: 3,
      name: "Material",
      target: "#collapseThree",
      controls: "collapseThree",
      idName: "collapseThree",
      other: {
        value: "Nylon"
      }
    },
    {
      id: 4,
      name: "Style",
      target: "#collapseFour",
      controls: "collapseFour",
      idName: "collapseFour",
      other: {
        value: "Cesare"
      }
    },
    {
      id: 5,
      name: "Availability",
      target: "#collapseFive",
      controls: "collapseFive",
      idName: "collapseFive",
      other: {
        value: "in stock only"
      }
    },
  ];



  // Change Icon on click 
  const changeIcon = () => {
    // var icon = document.querySelector('.accor-icon i');


    // if (icon.classList === "bi-plus") {
    //   icon.classList.add("bi-dash");
    //   icon.classList.remove("bi-plus");
    // } else {
    //   icon.classList.remove("bi-dash");
    //   icon.classList.add("bi-plus");

    // }


  };



  return (
    <>
      <div class="container-fluid px-0 py-5" id="Accessories">
        <div className='row border-black border border-opacity-25 mt-5'>
          <div className='col-1  py-3 d-flex align-items-center justify-content-center border-end border-black border-opacity-25'>
            <p className='text-secondary' style={{ fontSize: ".9rem" }}>View By <span className='ms-2 view1'>3</span> <span className='ms-2 view1'>4</span></p>
          </div>
          <div className='col-9  py-3 border-end border-secondary border-opacity-25'>
            <p className='text-secondary text-center' style={{ fontSize: ".9rem" }}>{accessProducts.length} Products</p>
          </div>
          <div className='col-1  py-3 text-center border-end border-secondary border-opacity-25'>
            <div class="dropdown">
              <p className='text-secondary dropdown-toggle' role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: ".9rem" }}>Sort by</p>
              <ul class="dropdown-menu">
                <li><Link class="dropdown-item" href="#">Action</Link></li>
                <li><Link class="dropdown-item" href="#">Another action</Link></li>
                <li><Link class="dropdown-item" href="#">Something else here</Link></li>
              </ul>
            </div>
          </div>
          <div className='col-1 py-3'>
            <p className=' text-secondary text-center' style={{ fontSize: ".9rem" }} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample2" aria-controls="offcanvasExample">Filter</p>
          </div>
        </div>




        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 py-5 px-1 px-md-3 px-lg-5 g-1">
          {accessProducts.map((cards, index) => {
            return (
              <div className='col'>
                <div class="card border-0 rounded-0 Access-card position-relative" key={index}>
                  <img src={cards.imgUrl} class="img-fluid h-100 w-100 z-0 object-fit-cover position-absolute top-0 start-0" alt="..." />
                  <div className='icon'>
                    <i class="bi bi-plus"></i>
                  </div>
                  <div class="card-body w-100 d-flex align-items-center justify-content-between position-absolute bottom-0">
                    <p class="card-title" style={{ fontSize: ".8rem" }}>{cards.name}</p>
                    <Link to="" class="btn stretched-link" style={{ fontSize: ".8rem" }}>&#8377; {cards.price}</Link>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </div >





      {/* OffCanvas  */}
      <div div class="offcanvas filter-canvas offcanvas-end" tabindex="-1" id="offcanvasExample2" aria-labelledby="offcanvasExampleLabel" >
        <div class="offcanvas-header border-bottom border-secondary border-opacity-25">
          <p class="offcanvas-title fs-5" id="offcanvasExampleLabel">Filters</p>
          <button type="button" class="btn-close shadow-none border-0 btn-c" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <div class="accordion access-filter mt-3" id="accordionExample">

            {Accordian.map((item, index) => {
              return (
                <div class="accordion-item border-bottom border-secondary border-opacity-25 rounded-0" key={index.id} onClick={changeIcon}>
                  <h2 class="accordion-header d-flex justify-content-between align-items-center pe-3">
                    <button style={{ fontSize: ".8rem" }} class="accordion-button bg-transparent shadow-none" type="button" data-bs-toggle="collapse" data-bs-target={`${item.target}`} aria-expanded="true" aria-controls={`${item.controls}`}>
                      {item.name}
                    </button>
                    <div className='accor-icon' style={{ fontSize: "1.2rem" }} >
                      <i className="bi bi-plus"></i>
                    </div>
                  </h2>
                  <div id={`${item.idName}`} class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <Link className='text-secondary text-decoration-none' style={{ fontSize: ".8rem" }}>{item.other.value}
                        {index === 1 && ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47"].map((size) => {
                          return (
                            <Link className='text-secondary flex-column d-flex text-decoration-none my-2'>  {size}</Link>
                          )
                        })}

                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div >
    </>
  )
}

export default Accessories;

