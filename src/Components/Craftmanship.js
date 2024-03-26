import React from 'react';
import "./Css/Craftmanship.css";










const Craftmanship = () => {
  const craftVideo = "https://cdn.shopify.com/videos/c/vp/968ae38271cf44a38546397f356b9700/968ae38271cf44a38546397f356b9700.HD-1080p-7.2Mbps-21978919.mp4";
  const thumbnail = "https://www.masongarments.com/cdn/shop/files/52A5629_2_cbfddaec-5b22-4ce0-9592-e0ad3b1c7067.jpg?v=1705049986&width=2000"
  const remove = () => {
    document.getElementById("remove").style.opacity = "0";
    // let video = document.querySelector("#crafHeader .video");
  }




















  return (
    <>

      <div className='container-fluid' id="craftHeader">
        <div className='row'>
          <div className='col'>
            <video className='video' src={craftVideo} muted autoPlay loop></video>

            <div className='thumbnail' id="remove">
              <img src={thumbnail} className='img-fluid' onClick={remove} alt="" />
              <p className='text-white display-6 fw-normal text-uppercase'> craftmanship</p>
              <div className='video-icon' >
                <i class="bi bi-play fs-4"></i>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Craftmanship