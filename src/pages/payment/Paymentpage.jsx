import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Payhead1 from '../../components/Payhead1'


function Paymentpage() {
    const [userdata, setuserdata] = useState({})
    const location = useLocation()
    console.log(location.state);
    const navigate = useNavigate()
    const nav = () => {
        navigate("/confirm")
    }
    const total = sessionStorage.getItem('total')


    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            const userDetails = JSON.parse(sessionStorage.getItem('userDetails'))
            console.log(userDetails);
            setuserdata(userDetails)
            const total = sessionStorage.getItem('total')


        }
        else {
            alert("please login")
        }

    }, [])
    console.log(userdata);


    return (
        <>
            <Payhead1/>
            <div>
                <Row className='g-0 ' >
                    <Col md={6} className='mt-5 d-flex justify-content-center ms-5'>

                        <div className='d-flex   mt-3 border shadow w-50 p-5 ms-5'>

                            <div className=''>
                                <h4 className=''>Delivery Address</h4>
                                <hr />


                                <div>
                                    <h5>{userdata.username}</h5>
                                    <p className='text-secondary'>{userdata.adress},{userdata.locality}</p>
                                    <p className='text-secondary'>{userdata.dist},{userdata.state}-{userdata.pincode}</p>
                                </div>




                            </div>

                        </div>
                    </Col>
                    <Col md={5} className='mt d-flex justify-content-center ms-5'>
                        <div className='d-flex   mt-3 border w-100 p-5 ms-5'>
                            <div>
                                <div className='w-100'>
                                    <h4 className='mt-5'>
                                        Toatl
                                    </h4>
                                    <p>Amount <span className='ms-5'>{total}</span></p>
                                    <p>Shipping <span className='ms-5 text-success'>Free</span></p>
                                    <hr />
                                    <p>GrandTotal <span className='ms-5'>{total}</span></p>
                                    <input type="radio" name="cash" id="cash" />Cash On Deliveriy
                                    <br />
                                    <input type="radio" name="cash" id="" className='mt-2'/>Online Payment
                                    <div className='mt-4  d-grid'>
                                        <button className='btn btn-warning p-2 block' >Place Order</button>
                                    </div>




                                </div>




                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>

    )
}

export default Paymentpage