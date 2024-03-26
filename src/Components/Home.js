import React from "react";
import HomeCarousel1 from "./HomeCarousel1";
import HomeCarousel2 from "./HomeCarousel2";
import "./Css/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const hVideo =
    "https://cdn.shopify.com/videos/c/vp/1a9be5898eb7496a9caa5da51c40c8d4/1a9be5898eb7496a9caa5da51c40c8d4.HD-1080p-7.2Mbps-23211198.mp4";

  const DiscoverData = [
    {
      id: 1,
      name: "citta",
      imgUrl:
        "https://www.masongarments.com/cdn/shop/files/Citta_pillar.jpg?v=1705080257&width=1920",
    },
    {
      id: 2,
      name: "scalare",
      imgUrl:
        "https://www.masongarments.com/cdn/shop/files/Scalare_pillar_2.jpg?v=1705081055&width=1920",
    },
    {
      id: 3,
      name: "amalfi",
      imgUrl:
        "https://www.masongarments.com/cdn/shop/files/Amalfi_pillar.jpg?v=1705080302&width=1920",
    },
  ];

  const craftVideo =
    "https://cdn.shopify.com/videos/c/vp/968ae38271cf44a38546397f356b9700/968ae38271cf44a38546397f356b9700.HD-1080p-7.2Mbps-21978919.mp4";
  const thumbnail =
    "https://www.masongarments.com/cdn/shop/files/52A5629_2_cbfddaec-5b22-4ce0-9592-e0ad3b1c7067.jpg?v=1705049986&width=2000";
  const remove = () => {
    document.getElementById("remove").style.opacity = "0";
    // let video = document.querySelector("#crafHeader .video");
  };

  return (
    <>
      {/* Header  */}
      <div className="container-fluid p-0" id="Header">
        <div className="row">
          <div className="col">
            <video loop autoPlay muted src={hVideo} />
          </div>
        </div>
      </div>

      <HomeCarousel1 />

      <div className="container-fluid p-0" id="Summer">
        <div className="row">
          <div className="col">
            <div class="card border-0 rounded-0 bg-transparent">
              <div class="card-body">
                <p class="card-title text-white" style={{ fontSize: ".8rem" }}>
                  New Collection
                </p>
                <p class="card-text text-white text-uppercase display-6 py-2">
                  spring summer 2024
                </p>
                <Link to="/" class="btn summer-btn px-5 py-3">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HomeCarousel2 />

      <div className="container-fluid p-0 py-5" id="Discover">
        <div className="row pb-5">
          <div className="col">
            <p className="fs-2 fw-light text-center">DISCOVER OUR PILLARS</p>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-0 gap-0 pb-3">
          {DiscoverData.map((item, index) => {
            return (
              <div className="col">
                <div
                  class="card discoverCard border-0 rounded-0 bg-transparent"
                  key={index}
                >
                  <img src={item.imgUrl} class="img-fluid" alt="" />
                  <div class="card-body">
                    <Link
                      to=""
                      class="btn stretched-link text-white fs-3 text-uppercase"
                    >
                      {item.name}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container-fluid" id="craftHeader">
        <div className="row pb-5">
          <div className="col">
            <video
              className="video"
              src={craftVideo}
              muted
              autoPlay
              loop
            ></video>

            <div className="thumbnail" id="remove">
              <img
                src={thumbnail}
                className="img-fluid"
                onClick={remove}
                alt=""
              />
              <p className="text-white display-6 fw-normal text-uppercase">
                {" "}
                craftmanship
              </p>
              <div className="video-icon">
                <i class="bi bi-play fs-4"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
