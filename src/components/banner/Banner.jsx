import React from 'react'
import Carousel from 'react-bootstrap/Carousel';



function Banner() {
  return (
   <>
   <div className='w-100 mt-3'>
   <Carousel>
      <Carousel.Item>
    <img src="https://cdn.venngage.com/template/thumbnail/full/79d5051d-11fa-4e0d-af4c-adeda6acab91.webp" className='w-100 ' alt="" />

        {/* <ExampleCarouselImage text="First slide" /> */}
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
    <img src="https://cms.landmarkshops.in/cdn-cgi/image/w=1232,q=70,fit=cover/LS-Fest/LS-new/desktop-dept-14modblock-oneBythree-A-menstripbanner-13May24.gif" className='w-100 ' alt="" />

        {/* <ExampleCarouselImage text="Second slide" /> */}
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
    <img src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/shark-new-collection-sale-clothing-banner-template-p3ztild89dffd0.webp" className='w-100 ' alt="" />

        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   </div>
   </>
  )
}

export default Banner