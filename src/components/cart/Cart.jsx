import React, { useEffect, useState } from 'react'
import { cartview, removeitem, upcart } from '../../../service/allapi'
import Header from '../Header'
import { Row, Col } from 'react-bootstrap'
import base_url from '../../../service/base_url'
import { Link, json } from 'react-router-dom'
import { toast } from 'react-toastify'
import Payhead1 from '../Payhead1'
import './cart.css'
import { headstatus } from '../../context/Context'
import { useContext } from 'react'


function Cart() {
  // const {headSt, setheadSt}=useContext(headstatus)

  const [qty, setqty] = useState(1)
  const [status, setstatus] = useState(false)

  const [data, setdata] = useState([])
  const [updata, setupdata] = useState({

    id: "", quantity: 0
  })
  useEffect(() => {
    handlecart()

  }, [status])
  const handlecart = async () => {
    const header = { "Authorization": `Bearer ${sessionStorage.getItem('token')}` }
    const result = await cartview(header)
    setdata(result.data)

    const arraydata = result.data


    //  console.log(result.data[1]);

  }
  console.log(data);
  console.log(data.userId);

  let total = 0
  let mrp=0

  data.map(item => (
    total = (item.productId ? item.productId.price * item.quantity : 1 * item.quantity) + total
  ))
  data.map(it=>(
    mrp=(it.productId ? it.productId.mrp * it.quantity : 1 * it.quantity) +mrp

  ))
  let dis=mrp-total

  sessionStorage.setItem('total', total)

  sessionStorage.setItem('mrp',mrp)
  sessionStorage.setItem('dis',dis)





  console.log(total);

  const handleupdate = async (id, qt) => {
    const header = { "Authorization": `Bearer ${sessionStorage.getItem('token')}` }


    // let upvalue = qty + 1
    // setqty(upvalue)
    const newUpdata = {
      ...updata, id: id, quantity: qt + 1
    };
    setupdata(newUpdata);
    console.log("quanttity==", updata);
    const update = await upcart(newUpdata, header)
    console.log("result===", update);
    setstatus(!status)
    let up = update.config.data




  }
  const handldecrese = async (id, qt) => {
    const header = { "Authorization": `Bearer ${sessionStorage.getItem('token')}` }


    // let upvalue = qty + 1
    // setqty(upvalue)

    const newUpdata = {
      ...updata, id: id, quantity: qt - 1
    };
    setupdata(newUpdata);
    console.log("quanttity==", updata);
    const update = await upcart(newUpdata, header)
    console.log("result===", update);
    let up = update.config.data
    setstatus(!status)






  }
  const handledelte = async (id) => {

    const result = await removeitem(id)


    if (result.status == 200) {
      toast.success("Product Delete Successfully")
      setstatus(!status)

    }
    else {
      toast.error(result.responce)
    }


  }



  return (

    <>
      <Payhead1 car />
      <div className='mt-5'>
        <div className='ms-5'>
          <Row className='g-0'>
            <Col md={6}>
              <div className='ms-5 p-5 shadow'>
                {
                  data.map(item => (
                    <div className='border mt-3 p-4 d-flex'>
                      <div>
                        <img style={{ width: "5rem" }} className='img img-fluid' src={`${base_url}/uploads/${item.productId?.image}`} alt="" />

                        <div className='mt-2'>
                          <button className='btn' onClick={() => handleupdate(item._id, item.quantity)}><i className="fa-solid fa-plus"></i></button>
                          {item.quantity}
                          <button className='btn' onClick={() => handldecrese(item._id, item.quantity)}><i className="fa-solid fa-minus"></i></button>


                        </div>


                      </div>
                      <div className='ms-3 d-flex justify-content-between'>
                        <div>
                          <h6 className='font-weight-bold'>{item.productId?.brand}</h6>
                          <p className='text-secondary'>{item.productId?.description}</p>
                          <p>₹{item.productId?.price} <span className='ms-3'>₹ <del>{item.productId?.mrp}</del></span></p>
                          <p><i class="fa-solid fa-retweet fa-xl me-2"></i> 7 Days Return</p>
                          <div className='mt-5'>
                          <button className='btn btn-outline-danger' onClick={() => handledelte(item._id)}>Remove</button>

                          </div>

                        </div>
                        


                      </div>



                    </div>

                  ))
                }





                {/* <table className='table table-borderd  '>
                  <thead className=''>
                    <th><h3 className='mb-4 ms-3'>ITEM</h3></th>
                    <th><h3 className='mb-4 ms-3'>PRICE</h3></th>
                    <th><h3 className='mb-4 ms-3'>QUNATITY</h3></th>

                    <th></th>
                  </thead>
                  <tbody className='mt-4'>
                    {
                      data.map(item => (

                        <tr>
                          <td>
                            <div className='d-flex '>
                              <img style={{ width: "5rem" }} className='img img-fluid' src={`${base_url}/uploads/${item.productId?.image}`} alt="" />
                              <div className='ms-5'>
                                {/* <p>{item.productId.category}</p> */}
                {/* <p className='text-secondary'>{item.productId?.brand}</p>
                                <p className=''>{item.productId?.description}</p>
                              </div>
                            </div>
                          </td>
                          <td>{item.productId?.price}</td>
                          <td>
                            {
                              item.productId ?
                                <div>
                                  <button className='btn' onClick={() => handleupdate(item._id, item.quantity)}><i className="fa-solid fa-plus"></i></button>
                                  {item.quantity}
                                  <button className='btn' onClick={() => handldecrese(item._id, item.quantity)}><i className="fa-solid fa-minus"></i></button>


                                </div> :
                                null


                            }









                          </td> */}
                {/* <td>{totalquty}</td> */}
                {/* <td>
                            {
                              item.productId ?
                                <div>
                                  <button className='btn' onClick={() => handledelte(item._id)}><i className="fa-solid fa-trash" style={{ color: " #ff0000" }}></i></button>


                                </div> : null
                            }
                          </td>

                        </tr>

                      ))
                    }



                  </tbody>
                </table> */}


              </div>
            </Col>
            <Col md={4}>
              <div className='p-2 shadow ms-4'>
                <div className='p-5'><h2>Cart Summery</h2>
                
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
                <div className='d-grid' >
                  <Link className='d-grid text-decoration-none' state={data} to={'/confirm'}>
                    <button className='btn btn-warning grid-block p-2' >Place Order</button>


                  </Link>

                </div>
              </div>
            </Col>
          </Row>

        </div>
      </div>
    </>

  )
}

export default Cart