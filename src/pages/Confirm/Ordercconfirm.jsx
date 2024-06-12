import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import base_url from '../../../service/base_url';

import { Row, Col } from 'react-bootstrap'
// import Header from '../../components/Header'
import { alignPropType } from 'react-bootstrap/esm/types';
import { userupdate } from '../../../service/allapi';
import { useLocation } from 'react-router-dom';
import Payhead1 from '../../components/Payhead1';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { headstatus } from '../../context/Context';



function Ordercconfirm() {
    // const [productdata,setproductdata]=useState([])
  const {headSt, setheadSt}=useContext(headstatus)
  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 4);
  const deldate = tomorrow.toDateString()


    const location = useLocation()
    const product = location.state
    // console.log(product[0].productId);
    const [data, setdata] = useState({
        username: "", email: "", phone: "", adress: "", pincode: "", dist: "", state: "", locality: ""
    })

    const mrp=sessionStorage.getItem('mrp')
    const dis=sessionStorage.getItem('dis')
    useEffect(() => {


        if (sessionStorage.getItem('token')) {
            const userDetails = JSON.parse(sessionStorage.getItem('userDetails'))
            console.log(userDetails);
            setdata({ id: userDetails._id, username: userDetails.username, email: userDetails.email, phone: userDetails.phone, adress: userDetails.adress, pincode: userDetails.pincode, dist: userDetails.dist, state: userDetails.state, locality: userDetails.locality })


        }
        else{
            alert("please login")
        }
       


    }, [])

    const handleupdate = async () => {
        const header = { "Authorization": `Bearer ${sessionStorage.getItem('token')}` }

        const result = await userupdate(data, header)
        sessionStorage.setItem("userDetails", JSON.stringify(result.data))

        console.log(result);
        setheadSt(!headSt)




    }
    const total = sessionStorage.getItem('total')
    

    return (
        <>
            <Payhead1 con />

            <div>
                <Row className='g-0'>
                    <Col md={7} className='mt-4'>
                        <div className='p-5'>
                            <div>
                                <h2 className='mb-4'>Contact & Adress Details</h2>
                                <Form>
                                    <div className='d-flex '>

                                        <FloatingLabel className="mb-3 w-50" controlId="floatingname" label="Name">
                                            <Form.Control value={data.username} type="text" onChange={(e) => setdata({ ...data, username: e.target.value })} placeholder="name" />
                                        </FloatingLabel>
                                        <FloatingLabel className=" ms-2 mb-3 w-50" controlId="floatingmob" label="Mobile NO">
                                            <Form.Control value={data.phone} maxLength={10} type="Number" onChange={(e) => setdata({ ...data, phone: e.target.value })} placeholder="Mobile NO" />
                                        </FloatingLabel>

                                    </div>
                                    <div className='d-flex '>

                                        <FloatingLabel className="mb-3 w-50" controlId="floatingname" label="Pincode">
                                            <Form.Control  type="Number" value={data.pincode} onChange={(e) => setdata({ ...data, pincode: e.target.value })} placeholder="pincode" />
                                        </FloatingLabel>
                                        <FloatingLabel className=" ms-2 mb-3 w-50" controlId="floatingPassword" label="Locality">
                                            <Form.Control type="text" value={data.locality} onChange={(e) => setdata({ ...data, locality: e.target.value })} placeholder="locality" />
                                        </FloatingLabel>


                                    </div>

                                    <FloatingLabel className="mb-3" controlId="floatingTextarea2" label="Adress(street and area)">
                                        <Form.Control as="textarea" value={data.adress} onChange={(e) => setdata({ ...data, adress: e.target.value })} placeholder="Leave a comment here" style={{ height: '100px' }} />
                                    </FloatingLabel>
                                    <div className='d-flex '>

                                        <FloatingLabel className=" ms-2 mb-3 w-50" controlId="floatingPassword" label="City/Distric/Town">
                                            <Form.Control type="text" value={data.dist} onChange={(e) => setdata({ ...data, dist: e.target.value })} placeholder="City/Distric/Town" />
                                        </FloatingLabel>
                                        <FloatingLabel className=" ms-2 mb-3 w-50" controlId="floatingPassword" label="State">
                                            <Form.Control type="text" value={data.state} onChange={(e) => setdata({ ...data, state: e.target.value })} placeholder="State" />
                                        </FloatingLabel>

                                    </div>



                                </Form>


                            </div>



                        </div>
                    </Col>
                    <Col md={5} className='mt-5'>
                        <div className='mt-5 p-4 border shdow'>
                            <div className='ms-5 mt-4'>
                                <div>
                                    <h5>Delivery Estimate</h5>

                                    <div>

                                        {
                                            product.map(item => (
                                                <div className='d-flex mt-4'>
                                                    <img className='me-5' width={'75rem'} src={`${base_url}/uploads/${item.productId?.image}`} alt="" />
                                                    <p className='ms-5'>Delivered in {deldate}</p>
                                                </div>

                                            ))

                                        }





                                    </div>


                                </div>
                                <div>
                                <div className='cart-d-p'>
                    <div className='d-flex justify-content-between'>
                      <p>Total MRP</p>
                      <p className='ms-4'>{mrp}</p>

                    </div>
                    <div className='d-flex justify-content-between'>
                      <p>Discount On MRP </p>
                      <p className='ms-4 text-success'>-{dis}</p>

                    </div>
                    <div className='d-flex justify-content-between'>
                      <p>Shipping </p>
                      <p className='text-success ms-3'>free</p>

                    </div>



                    <hr />
                    <div className='d-flex justify-content-between'>
                    <h5>Total </h5>
                    <h5>{total}</h5>

                    </div>
                    

                  </div>




                                </div>
                                <Link to={'/pay'} state={product} className='text-decoration-none'>
                                    <div className='mt-4  d-grid'>
                                        <button className='btn btn-warning p-2 block' onClick={handleupdate}>Continue</button>
                                    </div>
                                </Link>

                            </div>

                        </div>
                    </Col>
                </Row>


            </div>

        </>
    )
}

export default Ordercconfirm