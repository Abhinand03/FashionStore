import React from 'react'
import Header from '../../components/Header'
import { Row, Col } from 'react-bootstrap'
import { useLocation } from 'react-router-dom';
import base_url from '../../../service/base_url';
import { adtocart } from '../../../service/allapi';
import { toast } from 'react-toastify';

function ProductDetails() {
  const location = useLocation();
  const product = location.state.product;
  console.log(location);

  console.log(product);
  const getdata = async () => {
    const header = { "Authorization": `Bearer ${sessionStorage.getItem('token')}` }

    const result = await adtocart(product,header)
    console.log(result);
    if (result.status == 200) {
      toast.success(result.data.message)
    }
    else {
    //   console.log(result);
    navigate('/log')

      alert(result.response.data)
    }


  }
  

  
  return (
    <>
      <Header />
      <>

        <Row className='g-0 mt-5'>
          <Col sm={12} md={6}>

            <div className='w-50 mx-auto mt-5 ' >
              <div>
                <img src={`${base_url}/uploads/${product.image}`} className='img img-fluid w-100' alt="" />


              </div>



            </div>

          </Col>
          <Col sm={12} md={6} className='d-flex jusitfy-content-center align-items-center'>
            <div className=' mt-5'>
              <div>
                <h2 className='text-primary'>{product.title}</h2>
                <p className='text-secondary'>{product.brand}</p>
                <p>{product.description}</p>
                <p>₹{product.price}</p>
                <button className='btn btn-warning p-3' onClick={()=>getdata(product)}>ADD TO CART</button>



              </div>
            </div>
          </Col>

        </Row>

      </>

    </>
  )
}

export default ProductDetails