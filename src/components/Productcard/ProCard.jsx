import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import './card.css'
function ProCard() {
  const naviagte = useNavigate()

  const handleproduct=()=>{
    naviagte('/details')
  }

  return (
    <>

     <Card style={{ width: '18rem' }} className='mt-5 mx-2 m-card' >
      <Card.Img variant="top" className='car-img' onClick={handleproduct} src="https://assets.ajio.com/medias/sys_master/root/20230621/EPeU/64924a66d55b7d0c63889027/-473Wx593H-463775643-blue-MODEL.jpg" />
      <Card.Body>
        <Card.Title>Shirts</Card.Title>
        <Card.Text>
        Men Printed Slim Fit Shirt with Full Sleeves
        </Card.Text>
        <Card.Text>
        ₹999
        </Card.Text>
        <Button variant="warning">Add To cart</Button>
      </Card.Body>
    </Card>
    
    </>
  )
}

export default ProCard