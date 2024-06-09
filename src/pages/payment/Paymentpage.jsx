import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Payhead1 from '../../components/Payhead1'
import { orderup } from '../../../service/allapi'
import { toast } from 'react-toastify'
import { alldeltcart } from '../../../service/allapi'
import './pay.css'
import { razorpay } from '../../../service/allapi'
import { useContext } from 'react'
import { headstatus } from '../../context/Context'
import Swal from 'sweetalert2'


function Paymentpage() {
    const { headSt, setheadSt } = useContext(headstatus)

    const [userdata, setuserdata] = useState({})
    const [radio, setradio] = useState({ paymentmode: "" })
    const [order, setorder] = useState({
        adress: "", dist: "", email: "", locality: "", phone: 0, pincode: 0, state: "", username: "", quantity: 0, userId: "", brand: "", category: "", description: "", image: "", price: 0, title: "", paymentmode: "", razorpay_payment_id: "", razorpay_order_id: "", dstatus: "Undelivered", deliverydate: ""
    })
    const [razorpaydetail, setrazorpaydetail] = useState({
        amount: 0,
        currency: "INR",
        receipt: "qwsar3"

    })

    const location = useLocation()
    const product = location.state
    console.log(location.state);
    console.log(product[0].quantity);


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
            const razorpaytotal = total * 100
            setrazorpaydetail({ ...razorpaydetail, amount: razorpaytotal })







        }
        else {
            alert("please login")
        }

    }, [headSt])



    const pay = radio.paymentmode
    console.log(pay);


    const handleorder = async (id) => {
        //date generate 
        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 4);
        const deldate = tomorrow.toDateString()
        // console.log(deldate);

        if (pay == 'cod') {
            for (let i in product) {
                const newOrder = {
                    ...order,
                    username: userdata.username,
                    adress: userdata.adress,
                    dist: userdata.dist,
                    email: userdata.email,
                    locality: userdata.locality,
                    phone: userdata.phone,
                    pincode: userdata.pincode,
                    state: userdata.state,
                    brand: product[i].productId.brand,
                    title: product[i].productId.title,
                    category: product[i].productId.category,
                    price: product[i].productId.price,
                    image: product[i].productId.image,
                    userId: product[i].userId,
                    quantity: product[i].quantity,
                    paymentmode: "COD",
                    deliverydate: deldate

                };

                const result = await orderup(newOrder);
                console.log(result);
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Your Order Placed Successfully",
                    showConfirmButton: false,
                    timer: 2500
                });

                navigate('/')

            }
            const delt = await alldeltcart(id)
            console.log(delt);

        }
        else if (pay == "prepaid") {

            const razorpayorder = await razorpay(razorpaydetail)
            console.log(razorpayorder);
            const razorData = razorpayorder.data
            console.log(razorData);

            var options = {
                "key": "rzp_test_VRqhYXR5AZu5C1", // Enter the Key ID generated from the Dashboard
                amount: razorpaydetail.amount,  // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to paise
                "currency": "INR",
                "name": "Fashion Store", //your business name
                "description": "Test Transaction",
                "image": "https://example.com/your_logo",
                "order_id": razorData.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                "handler": async function (response) {
                    for (let i in product) {
                        const newOrder = {
                            ...order,
                            username: userdata.username,
                            adress: userdata.adress,
                            dist: userdata.dist,
                            email: userdata.email,
                            locality: userdata.locality,
                            phone: userdata.phone,
                            pincode: userdata.pincode,
                            state: userdata.state,
                            brand: product[i].productId.brand,
                            title: product[i].productId.title,
                            category: product[i].productId.category,
                            price: product[i].productId.price,
                            image: product[i].productId.image,
                            userId: product[i].userId,
                            quantity: product[i].quantity,
                            paymentmode: "PREPAID",
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_order_id,
                            deliverydate: deldate


                        };

                        const result = await orderup(newOrder);
                        console.log(result);

                        const delt = await alldeltcart(id)
                        console.log(delt);
                        toast.success("Your Order Is Successfully Completed ")

                        navigate('/')



                    }




                    // alert(response.razorpay_payment_id);
                    // alert(response.razorpay_order_id);
                    // alert(response.razorpay_signature)
                },
                "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
                    "name": userdata.username, //your customer's name
                    "email": userdata.email,
                    "contact": userdata.phone //Provide the customer's phone number for better conversion rates 
                },
                "notes": {
                    "address": "Razorpay Corporate Office"
                },
                "theme": {
                    "color": "#ad0b09"
                }
            };

            var rzp1 = new window.Razorpay(options);
            rzp1.on('payment.failed', function (response) {
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
            });
            rzp1.open();
            e.preventDefault()



        }

        else {
            toast.error("please Select An Payment Option")
        }


    }
    console.log(razorpaydetail);

    // console.log(userdata);
    // console.log(order);
    // console.log(radio);



    return (
        <>
            <Payhead1 />
            <div>
                <Row className='g-0 ' >
                    <Col md={6} className='mt-5 d-flex justify-content-center ms-5'>

                        <div className=' ad d-flex   mt-3 border shadow w-100 p-5 ms-5'>

                            <div  >
                                <h4 className=''>Delivery Address</h4>
                                <hr />


                                <div className='ad2'>
                                    <h5>{userdata.username}</h5>
                                    <p className='text-secondary'>{userdata.adress},{userdata.locality}</p>
                                    <p className='text-secondary adp2'>{userdata.dist},{userdata.state}-{userdata.pincode}</p>
                                </div>





                            </div>

                        </div>
                    </Col>
                    <Col md={5} className='mt d-flex justify-content-center ms-5'>
                        <div className='d-flex   mt-3 border w-100 p-5 ms-5 '>
                            <div>
                                <div className='w-100'>
                                    <h4 className='mt-5'>
                                        Total
                                    </h4>
                                    <hr />
                                    <p>Amount <span className='ms-5'>{total}</span></p>
                                    <p>Shipping <span className='ms-5 text-success'>Free</span></p>
                                    <hr />
                                    <p>GrandTotal <span className='ms-5'>{total}</span></p>
                                    <input type="radio" onChange={(e) => { setradio({ ...radio, paymentmode: e.target.value }) }} name="cash" id="cash" value="cod" />Cash On Deliveriy
                                    <br />
                                    <input type="radio" name="cash" id="" value="prepaid" onChange={(e) => { setradio({ ...radio, paymentmode: e.target.value }) }} className='mt-2' />Online Payment
                                    <div className='mt-4  d-grid'>
                                        <button onClick={() => handleorder(product[0].userId)} className='btn btn-warning p-2 block' >Place Order</button>
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