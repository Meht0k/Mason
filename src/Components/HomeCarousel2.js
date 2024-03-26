import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Css/HomeCarousel2.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

const HomeCarousel1 = () => {
  const CarouselArray2 = [
    {
      id: 1,
      name: "Tia Heartbeat Black White",
      url: "https://www.masongarments.com/cdn/shop/products/tia-heartbeat-black-white-519608.jpg",
      price: "27,300.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 2,
      name: "Tia Heartbeat Green",
      url: "https://www.masongarments.com/cdn/shop/products/tia-heartbeat-green-479659.jpg",
      price: "27,300.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 3,
      name: "Tia Archetipo Black",
      url: "https://www.masongarments.com/cdn/shop/products/tia-archetipo-black-104155.jpg",
      price: "27,300.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 4,
      name: "Tia Archetipo Green",
      url: "https://www.masongarments.com/cdn/shop/products/venice-movimento-black-387762.jpg",
      price: "27.300.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 5,
      name: "Torino Originale Taupe",
      url: "https://www.masongarments.com/cdn/shop/products/torino-originale-taupe-488704.jpg",
      price: "27,300.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 6,
      name: "Tia Originale Taupe",
      url: "https://www.masongarments.com/cdn/shop/products/tia-originale-taupe-437991.jpg",
      price: "27,300.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 7,
      name: "Tia Archetipo Taupe",
      url: "https://www.masongarments.com/cdn/shop/products/tia-archetipo-taupe-677661.jpg",
      price: "27,300.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    {
      id: 8,
      name: "Tia Originale Stone",
      url: "https://www.masongarments.com/cdn/shop/products/tia-originale-stone-999721.jpg",
      price: "27,300.00",
      size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
  ];

  return (
    <>
      <div
        className="container-fluid px-1 px-md-2 px-lg-5 py-5"
        id="NewArrival"
      >
        <div className="row">
          <div className="col">
            <p className="fs-2 fw-normal">EXPLORE CITTÁ SNEAKERS</p>
          </div>
        </div>
        <div
          className="row mt-3 g-1"
          id="SwiperCarousel"
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={3}
            freeMode={true}
            modules={[FreeMode]}
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
            className="mySwiper"
          >
            {CarouselArray2.map((item, index) => {
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
                        {/* <Link
                          to=""
                          class="btn stretched-link py-0"
                          style={{ fontSize: ".8rem" }}
                          key={index}
                        >
                          {item.size}
                        </Link> */}
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
