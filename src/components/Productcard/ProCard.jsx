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
function ProCard({product}) {
  const {headSt, setheadSt}=useContext(headstatus)

  
  const navigate=useNavigate()
  

  const getdata = async () => {
    const header = { "Authorization": `Bearer ${sessionStorage.getItem('token')}` }

    const result = await adtocart(product,header)
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

     <Card  className='mt-5 mx-2 m-card' >
      <Link  to={'/details'} state={{product}}>

        <Card.Img variant="top" className='car-img'   src={`${base_url}/uploads/${product?.image}`} />
      </Link>

      <Card.Body>
        <Card.Title><p >{product?.brand}</p></Card.Title>
        <Card.Title className='text-secondary'>{product.title}</Card.Title>
       
        <Card.Text>
          <div className='d-flex'>
            <p className='font-weight-bold'>₹{product.price}</p>
            <p className='ms-4'>MRP : ₹<del>1999</del> </p>

            </div>

        </Card.Text>
        <Button variant="danger" className='car-btn' onClick={()=>getdata(product)} >Add To cart</Button>
      </Card.Body>
    </Card>
    
    </>
  )
}

export default ProCard