import React from 'react';
import './Css/Content.css'

const Content = () => {
  const video = "https://cdn.shopify.com/videos/c/vp/62b57856437d4810ba9bd0dffbdee29d/62b57856437d4810ba9bd0dffbdee29d.HD-1080p-7.2Mbps-24552751.mp4"


  // const contentArray = [
  //   {
  //     img: "https://www.masongarments.com/cdn/shop/files/DSC5840.jpg"
  //   },
  //   {
  //     img: "https://www.masongarments.com/cdn/shop/files/DSC5675.jpg"
  //   },
  //   {
  //     img: "https://www.masongarments.com/cdn/shop/files/DSC8354.jpg"
  //   },
  //   {
  //     img: "https://www.masongarments.com/cdn/shop/files/DSC7984.jpg"
  //   },
  //   {
  //     img: "https://www.masongarments.com/cdn/shop/files/DSC8099.jpg"
  //   },
  //   {
  //     img: "https://www.masongarments.com/cdn/shop/files/DSC5597.jpg"
  //   },
  //   {
  //     img: "https://www.masongarments.com/cdn/shop/files/DSC7752.jpg"
  //   },
  //   {
  //     img: "https://www.masongarments.com/cdn/shop/files/DSC7696.jpg"
  //   },
  //   {
  //     img: "https://www.masongarments.com/cdn/shop/files/DSC9242.jpg"
  //   },
  //   {
  //     img: "https://www.masongarments.com/cdn/shop/files/DSC9176.jpg"
  //   },
  //   {
  //     img: "https://www.masongarments.com/cdn/shop/files/DSC9299.jpg"
  //   },
  //   {
  //     img: "https://www.masongarments.com/cdn/shop/files/DSC9002_01d5f541-9122-44e5-94f2-a0c145c2b848.jpg"
  //   },
  //   {
  //     img: "https://www.masongarments.com/cdn/shop/files/DSC8642.jpg"
  //   },
  //   {
  //     img: "https://www.masongarments.com/cdn/shop/files/DSC8972.jpg"
  //   },
  //   {
  //     img: "https://www.masongarments.com/cdn/shop/files/Paarden_wei_16x9_56163e1c-ef22-4ce2-910c-2cbe37917314.jpg"
  //   },
  //   {
  //     img: "https://www.masongarments.com/cdn/shop/files/DSC6266.jpg"
  //   },
  //   {
  //     img: "https://www.masongarments.com/cdn/shop/files/DSC6620.jpg"
  //   }
  // ];

  return (
    <>
      <div className="container-fluid p-0" id="Content">
        <div className="row">
          <div className='col'>
            <video loop muted autoPlay src={video} />
          </div>
        </div>
      </div>

      <div className="container-fluid" id="text">
        <div className="row">
          <div className="col">
            <div className='text-p p-5'>
              {["Mason Garments presents its Spring Summer 2024 Campaign, titled Scalare.", "A long-awaited look at our latest collection - transporting you to the mountains of Livigno, Italy. Where picturesque valleys and snow-capped mountains inspire a season of luxury.", "Scalare is one of our fundamental collection pillars, featuring contemporary hiking inspired boots in high and low silhouettes. Handmade in Italy and based on custom-made lightweight outsoles."].map((item, index) => {
                return (

                  <p className=' fs-6 fw-light ' key={index}>{item}</p>
                )
              })}

            </div>
          </div>
        </div>
      </div>




      {/* <div className="container-fluid px-0 py-5" id="">
        <div className={`row row-cols-1 row-cols-md-2 row-cols-lg-2 g-0`}>
          {contentArray.map((item, index) => {
            return (
              <>
                <div className="col">
                  <div className="card ContentCard border-0 rounded-0 bg-transparent position-relative" key={index}>
                    <img src={item.img} className="img-fluid object-fit-cover w-100 position-absolute top-50 start-50" alt="" />
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div> */}




    </>

  )
}

export default Content