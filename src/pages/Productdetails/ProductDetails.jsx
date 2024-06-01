import React from 'react'
import Header from '../../components/Header'
import { Row, Col } from 'react-bootstrap'
import { useLocation } from 'react-router-dom';
import base_url from '../../../service/base_url';

function ProductDetails() {
  const location = useLocation();
  const product = location.state.product;
  console.log(location);

  console.log(product);

  
  return (
    <>
      <Header />
      <>

        <Row className='g-0'>
          <Col sm={12} md={6}>

            <div className='w-50 mx-auto mt-5 ' >
              <div>
                <img src={`${base_url}/uploads/${product.image}`} className='img img-fluid w-100' alt="" />


              </div>



            </div>

          </Col>
          <Col sm={12} md={6} className='d-flex jusitfy-content-center align-items-center'>
            <div className=''>
              <div>
                <h2 className='text-primary'>{product.title}</h2>
                <p>{product.description}</p>
                <p>₹{product.price}</p>
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