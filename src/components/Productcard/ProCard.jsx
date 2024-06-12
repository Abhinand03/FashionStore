import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import './card.css'
import base_url from '../../../service/base_url'
import { adtocart } from '../../../service/allapi';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { headstatus } from '../../context/Context';
import Swal from 'sweetalert2';
function ProCard({ product }) {
  const { headSt, setheadSt } = useContext(headstatus)


  const navigate = useNavigate()

  const off = product.mrp - product.price



  const getdata = async () => {
    const header = { "Authorization": `Bearer ${sessionStorage.getItem('token')}` }

    const result = await adtocart(product, header)
    setheadSt(!headSt)
    console.log(result);
    if (result.status == 200) {
      toast.success(result.data.message)
    }

    else {
      //   console.log(result);

      Swal.fire("please Login First");
      navigate('/log')


      // alert(result.respnse.data)
    }


  }





  return (
    <>

      <Card className='mt-5 mx-3 m-card border-0' >
        <Link to={'/details'} state={{ product }}>

          <Card.Img variant="top" className='car-img' src={`${base_url}/uploads/${product?.image}`} />
        </Link>

        <Card.Body>
          <Card.Title><h4 >{product?.brand}</h4></Card.Title>
          <Card.Text className='text-secondary car-p'>{product.title}</Card.Text>

          <Card.Text>
            <div className='d-flex'>
              <h5 className='font-weight-bold'>₹{product.price}</h5>
              <p className='ms-2 car-pri'><del>MRP : {product.mrp}</del> </p>
              <p className='text-danger car-pri ms-2'>(Rs.{off}OFF)</p>

            </div>

          </Card.Text>
          {/* <Button variant="danger" className='car-btn mt-4' onClick={() => getdata(product)} >Add To cart</Button> */}
          <button className="CartBtn "  onClick={() => getdata(product)}>
            <span className="IconContainer">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="rgb(17, 17, 17)" class="cart"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
            </span>
            <p class="text mt-3">Add to Cart</p>
          </button>
        </Card.Body>
      </Card>

    </>
  )
}

export default ProCard