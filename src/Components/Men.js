import React from 'react';
import './Css/Men.css';
import { Link } from 'react-router-dom';


const Men = () => {

  const menProduct = [
    {
      id: 1,
      name: "Tia Originale Black",
      url: "https://www.masongarments.com/cdn/shop/products/tia-originale-black-384528.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 2,
      name: "Tia Originale Stone",
      url: "https://www.masongarments.com/cdn/shop/products/tia-originale-stone-999721.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 3,
      name: "Tia Originale Taupe",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/tia-originale-taupe-437991.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 4,
      name: "Tia Originale Grey",
      url: "https://www.masongarments.com/cdn/shop/products/tia-originale-grey-743484.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 5,
      name: "Amalfi Loafer Blue",
      url: "https://www.masongarments.com/cdn/shop/products/tia-originale-blue-782355.jpg",
      price: "27,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 6,
      name: "Amalfi Loafer Forest",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/amalfi-loafer-forest-850916.jpg",
      price: "27,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 7,
      name: "Amalfi Loafer Grey",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/amalfi-loafer-grey-763099.jpg",
      price: "27,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 8,
      name: "Amalfi Loafer Blue",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/amalfi-loafer-blue-231078.jpg",
      price: "27,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 9,
      name: "Genova Massiccio White",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/genova-massiccio-white-885464.jpg",
      price: "39,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 10,
      name: "Genova Massiccio Peach",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/genova-essenziale-peach-759238.jpg",
      price: "39,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 11,
      name: "Genova Massiccio Brown",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/genova-regolare-brown-443608.jpg",
      price: "39,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 12,
      name: "Genova Massiccio Green",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/genova-essenziale-green-719096.jpg",
      price: "39,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 13,
      name: "Torino Essenziale Blue",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/torino-essenziale-blue-314011.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 14,
      name: "Torino Scalata Taupe",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/torino-scalata-taupe-515772.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 15,
      name: "Torino Scalata Brown",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/torino-scalata-brown-931521.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 16,
      name: "Torino Originale Taupe",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/torino-originale-taupe-488704.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 17,
      name: "Tia Heartbeat Black White",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/tia-heartbeat-black-white-519608.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 18,
      name: "Tia Heartbeat Orange",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/tia-heartbeat-orange-187933.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 19,
      name: "Tia Heartbeat Tonal White",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/tia-heartbeat-tonal-white-498146.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 20,
      name: "Tia Heartbeat Green",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/tia-heartbeat-green-479659.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 21,
      name: "Venice Movimento White",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/venice-movimento-white-357044.jpg",
      price: "33,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 22,
      name: "Venice Movimento Creme",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/venice-movimento-creme-130201.jpg",
      price: "33,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 23,
      name: "Venice Movimento Brown",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/venice-movimento-brown-739764.jpg",
      price: "33,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 24,
      name: "Venice Movimento Black",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/venice-movimento-black-387762.jpg",
      price: "33,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 25,
      name: "Tia Sportivo Tonal White",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/tia-sportivo-tonal-white-253220.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 26,
      name: "Tia Sportivo Orange",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/tia-sportivo-orange-477700.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 27,
      name: "Tia Sportivo Green",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/genova-regolare-green-254479.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 28,
      name: "Genova Regolare Green",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/genova-regolare-green-254479.jpg",
      price: "33,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 29,
      name: "Massif Hi Capelli Blue",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/massif-hi-capelli-blue-236397.jpg",
      price: "43,600.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 30,
      name: "Spur Scalata Creme",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/spur-scalata-creme-280345.jpg",
      price: "39,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 31,
      name: "Massif Hi Scalata Black",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/massif-hi-scalata-black-142564.jpg",
      price: "43,600.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 32,
      name: "Massif Hi Scalata Tonal Black",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/massif-hi-scalata-tonal-black-230457.jpg",
      price: "43,600.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 33,
      name: "Massif Scalata Creme",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/massif-scalata-creme-288643.jpg",
      price: "39,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 34,
      name: "Spur Scalata Black",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/spur-scalata-black-641263.jpg",
      price: "39,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 35,
      name: "Massif Scalata Black",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/massif-scalata-black-173375.jpg",
      price: "39,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 36,
      name: "Massif Scalata Tonal Black",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/massif-scalata-tonal-black-736126.jpg",
      price: "39,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 37,
      name: "Genova Essenziale White",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/genova-essenziale-white-692199.jpg",
      price: "39,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 38,
      name: "Genova Essenziale Grey",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/genova-essenziale-grey-922591.jpg",
      price: "39,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 39,
      name: "Genova Solido Grey",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/genova-solido-grey-111588.jpg",
      price: "39,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 40,
      name: "Genova Massiccio Grey",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/genova-massiccio-grey-185803.jpg",
      price: "39,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 41,
      name: "Tia Squalo White",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/tia-squalo-white-883779.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 42,
      name: "Tia Originale Grey",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/tia-originale-grey-743484.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 43,
      name: "Tia Originale Black",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/tia-originale-black-384528.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 44,
      name: "Tia Originale Yellow",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/tia-originale-yellow-582121.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 45,
      name: "Amalfi Loafer Brown",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/amalfi-loafer-brown-418465.jpg",
      price: "27,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 46,
      name: "Amalfi Loafer Stone",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/amalfi-loafer-stone-787947.jpg",
      price: "27,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 47,
      name: "Amalfi Loafer Dark Blue",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/amalfi-loafer-dark-blue-127433.jpg",
      price: "27,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 48,
      name: "Amalfi Loafer Tonal Black",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/amalfi-loafer-tonal-black-448163.jpg",
      price: "27,100.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 49,
      name: "Tia Nubuck Black White",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/tia-nubuck-black-white-613117.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 50,
      name: "Tia Nubuck Black Black",
      url: "https://cdn.shopify.com/s/files/1/0668/0274/5589/products/tia-nubuck-black-black-121275.jpg",
      price: "27,500.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
  ]


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








  return (
    <>
      <div className="container-fluid px-0 py-5" id="Women">
        <div className='row border-black border border-opacity-25 mt-5 filter'>
          <div className='col-1 d-flex align-items-center justify-content-center border-end border-black border-opacity-25 pt-3 pb-2'>
            <p className='text-secondary' style={{ fontSize: ".9rem" }}>View By <span className='ms-2 view1'>3</span> <span className='ms-2 view1'>4</span></p>
          </div>
          <div className='col-9 border-end border-secondary border-opacity-25 pt-3 pb-2'>
            <p className='text-secondary text-center' style={{ fontSize: ".9rem" }}>{menProduct.length} Products</p>
          </div>
          <div className='col-1 text-center border-end border-secondary border-opacity-25 pt-3 pb-2'>
            <div class="dropdown">
              <p className='text-secondary dropdown-toggle' role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: ".9rem" }}>Sort by</p>
              <ul class="dropdown-menu">
                <li><Link class="dropdown-item" to="">Action</Link></li>
                <li><Link class="dropdown-item" to="">Another action</Link></li>
                <li><Link class="dropdown-item" to="">Something else here</Link></li>
              </ul>
            </div>
          </div>
          <div className='col-1 pt-3 pb-2'>
            <p className='text-secondary text-center' style={{ fontSize: ".9rem" }} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample2" aria-controls="offcanvasExample">Filter</p>
          </div>
        </div>




        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-4 py-5 px-1 px-md-3 px-lg-5 g-1">
          {menProduct.map((cards, index) => {
            return (
              <div className='col'>
                <div class="card border-0 rounded-0 men-card" key={index}>
                  <img src={cards.url} class="img-fluid" alt="..." />
                  <div class="card-body w-100 d-flex align-items-center justify-content-between position-absolute bottom-0 z-3">
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
      <div class="offcanvas filter-canvas offcanvas-end" tabindex="-1" id="offcanvasExample2" aria-labelledby="offcanvasExampleLabel" >
        <div class="offcanvas-header border-bottom border-secondary border-opacity-25">
          <p class="offcanvas-title fs-5" id="offcanvasExampleLabel">Filters</p>
          <button type="button" class="btn-close shadow-none border-0 btn-c" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <div class="accordion access-filter mt-3" id="accordionExample">

            {Accordian.map((item, index) => {
              return (
                <div class="accordion-item border-bottom border-secondary border-opacity-25 rounded-0" key={index.id} >
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

export default Men