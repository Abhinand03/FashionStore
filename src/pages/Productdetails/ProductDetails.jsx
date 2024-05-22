import React from 'react'
import Header from '../../components/Header'
import { Row, Col } from 'react-bootstrap'

function ProductDetails() {
  return (
    <>
      <Header />
      <>

        <Row className='g-0'>
          <Col sm={12} md={6}>

            <div className='w-50 mx-auto mt-5 ' >
              <div>
                <img src="https://assets.ajio.com/medias/sys_master/root/20230621/EPeU/64924a66d55b7d0c63889027/-473Wx593H-463775643-blue-MODEL.jpg" className='img img-fluid' alt="" />


              </div>



            </div>

          </Col>
          <Col sm={12} md={6} className='d-flex jusitfy-content-center align-items-center'>
            <div className=''>
              <div>
                <h2 className='text-primary'>Mens Shirt</h2>
                <p>Full sleve Cheched Shirt</p>
                <p>₹999</p>
                <button className='btn btn-warning'>ADD TO CART</button>



              </div>
            </div>
          </Col>

        </Row>

      </>

    </>
  )
}

export default ProductDetails