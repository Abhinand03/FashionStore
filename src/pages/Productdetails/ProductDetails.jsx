import React from 'react'
import Header from '../../components/Header'
import { Row, Col } from 'react-bootstrap'
import { useLocation } from 'react-router-dom';
import base_url from '../../../service/base_url';
import { adtocart } from '../../../service/allapi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './details.css'
import Swal from 'sweetalert2';

function ProductDetails() {
  const location = useLocation();
  const product = location.state.product;
  console.log(location);
  const navigate=useNavigate()

  console.log(product);
  const getdata = async () => {
    const header = { "Authorization": `Bearer ${sessionStorage.getItem('token')}` }

    const result = await adtocart(product, header)
    console.log(result);
    if (result.status == 200) {
      toast.success(result.data.message)
    }
    else {
      //   console.log(result);
      navigate('/log')

      Swal.fire(result.response.data)
    }


  }
  const mrp=product.mrp
  const price=product.price

  const of= 100-(price/mrp)*100
  const off=Math.round(of)
  console.log(off);



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
          <Col sm={12} md={6} className='d-flex jusitfy-content-center align-items-center '>
            <div className=' mt-5 det'>
              <div>
                <div>
                  <h2 className=''>{product?.brand}</h2>

                  <p className='text-secondary'>{product?.title}</p>

                </div>
                <hr />
                <div className='price-div'>

                  <p className='p-1'>₹{product.price}</p>
                  <p className='p-2'>MRP : <del>{product?.mrp}</del> </p>
                  <p className='badge bg-danger h-25' ><span>{off}</span>%off</p>



                </div>
                <p className='text-success' style={{fontWeight:"700"}}>inclusive of all taxes</p>
                <div>

                </div>
                <div className='mt-5 d-flex'>
                  <p className='mt-4 me-3'><i class="fa-solid fa-hand-holding-dollar fa-2xl me-3"></i>Cash On Delivery</p>
                  <p className='mt-4 me-3'><i class="fa-solid fa-truck  fa-xl me-3 "></i>Express Delivery</p>
                  <p className='mt-4 me-3'><i class="fa-solid fa-arrow-right-arrow-left  fa-xl me-3"></i>7 Days Exchange & Return</p>
                </div>

                <div className='mt-5'>
                  <h3>PRODUCT DETAILS</h3>

                <p>{product.description}</p>
                <h6>Color: <span>{product.color}</span> </h6>
                <h6>Material: <span>{product?.meterial}</span></h6>

                </div>




                <button className='btn btn-ad p-3' onClick={() => getdata(product)}>ADD TO CART</button>
                <br />



              </div>
            </div>
          </Col>

        </Row>

      </>

    </>
  )
}

export default ProductDetails