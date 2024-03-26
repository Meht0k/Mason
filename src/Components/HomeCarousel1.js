import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Css/HomeCarousel1.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";



const HomeCarousel1 = () => {
  const CarouselArray = [
    {
      id: 1,
      name: "Tia Originale Grey",
      url: "https://www.masongarments.com/cdn/shop/products/tia-originale-grey-743484.jpg",
      price: "27,300.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 2,
      name: "Amalfi Loafer Mid Brown",
      url: "https://www.masongarments.com/cdn/shop/products/amalfi-loafer-mid-brown-336561.jpg",
      price: "32000.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 3,
      name: "Torino Originale Taupo",
      url: "https://www.masongarments.com/cdn/shop/products/torino-originale-taupe-488704.jpg",
      price: "27,300.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 4,
      name: "Venice Movimento Brown",
      url: "https://www.masongarments.com/cdn/shop/products/spur-scalata-creme-280345.jpg",
      price: "32,900.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 5,
      name: "Tia Originale Grey",
      url: "https://www.masongarments.com/cdn/shop/products/tia-originale-grey-743484.jpg",
      price: "27,300.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 6,
      name: "Tia Heartbreak Black White",
      url: "https://www.masongarments.com/cdn/shop/products/tia-heartbeat-black-white-519608.jpg",
      price: "27,300.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 7,
      name: "Venice Moviemento Black",
      url: "https://www.masongarments.com/cdn/shop/products/tia-originale-grey-743484.jpg",
      price: "32900.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 8,
      name: "Genova Massiccio Grey",
      url: "https://www.masongarments.com/cdn/shop/products/genova-massiccio-grey-185803.jpg",
      price: "38,800.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
  ];





  return (
    <>
      {/* New Arrival */}
      <div
        className="container-fluid px-1 px-md-2 px-lg-5 py-5"
        id="NewArrival"
      >
        <div className="row">
          <div className="col">
            <p className="fs-2 fw-normal">NEW ARRIVAL</p>
          </div>
        </div>
        <div className="row px-0">
          <div className="col d-flex justify-content-between">
            <ul className="nav">
              <li className="nav-item">
                <Link
                  to=""
                  className="nav-link border-0 shadow-none active"
                  aria-current="page"
                >
                  Men
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link border-0 shadow-none">
                  Women
                </Link>
              </li>
            </ul>
            <ul className="nav">
              <li className="nav-item">
                <Link to="/Men" className="nav-link">
                  View All <i class="bi bi-arrow-right-short"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row  row-cols-1 row-cols-md-2 row-cols-lg-4 mt-3 g-1" id="SwiperCarousel">
          <Swiper
            breakpoints={{
              // when window width is >= 576px
              576: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              // when window width is >= 992px
              992: {
                slidesPerView: 4,
              },
            }}
            slidesPerView={1}
            spaceBetween={3}
            freeMode={true}
            modules={[FreeMode]}
            className="mySwiper"
          >
            {CarouselArray.map((item, index) => {
              return (
                <div className="col">
                  <SwiperSlide>
                    <div
                      class="card border-0 rounded-0 bg-transparent Arrival-card"
                      key={index}
                    >
                      <img src={item.url} class="img-fluid" alt="" />
                      <div class="card-body d-flex justify-content-between w-100">
                        <p class="card-title" style={{ fontSize: ".8rem" }}>
                          {item.name}
                        </p>
                        <p class="card-text" style={{ fontSize: ".8rem" }}>
                          &#8377; {item.price}
                        </p>
                        {/* <Link to="" class="btn stretched-link py-0" style={{ fontSize: ".8rem" }} key={index} >{item.size}</Link> */}
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HomeCarousel1;
