import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import './card.css'
import base_url from '../../../service/base_url'
import { adtocart } from '../../../service/allapi';
import { toast } from 'react-toastify';

function ProCard({product}) {
  
  const navigate=useNavigate()
  

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

     <Card style={{ width: '18rem' }} className='mt-5 mx-2 m-card' >
      <Link  to={'/details'} state={{product}}>

        <Card.Img variant="top" className='car-img'   src={`${base_url}/uploads/${product.image}`} />
      </Link>

      <Card.Body>
        <Card.Title><p className='text-secondary'>{product.brand}</p></Card.Title>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
        {product.description}
        </Card.Text>
        <Card.Text>₹
        {product.price}
        </Card.Text>
        <Button variant="warning" onClick={()=>getdata(product)} >Add To cart</Button>
      </Card.Body>
    </Card>
    
    </>
  )
}

export default ProCard