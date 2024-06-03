import React, { useEffect, useState } from 'react'
import { cartview, removeitem, upcart } from '../../../service/allapi'
import Header from '../Header'
import { Row, Col } from 'react-bootstrap'
import base_url from '../../../service/base_url'
import { Link, json } from 'react-router-dom'
import { toast } from 'react-toastify'
import Payhead1 from '../Payhead1'
import { headstatus } from '../../context/Context'
import { useContext } from 'react'


function Cart() {
  // const {headSt, setheadSt}=useContext(headstatus)

  const [qty, setqty] = useState(1)
  const [status,setstatus]=useState(false)
  
  const [data, setdata] = useState([])
  const [updata,setupdata]=useState({
  
    id:"",quantity:0
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

  data.map(item => (
    total = (item.productId?item.productId.price*item.quantity:1 * item.quantity) + total
  )) 

  sessionStorage.setItem('total',total)


  


  console.log(total);

  const handleupdate = async (id,qt) => {
    const header = { "Authorization": `Bearer ${sessionStorage.getItem('token')}` }

            
    // let upvalue = qty + 1
    // setqty(upvalue)
    const newUpdata = { ...updata, id: id, quantity: qt+1
    };
    setupdata(newUpdata);
    console.log("quanttity==", updata);
    const update = await upcart(newUpdata,header) 
    console.log("result===",update);
    setstatus(!status)
    let up=update.config.data




  }
  const handldecrese = async (id,qt) => {
    const header = { "Authorization": `Bearer ${sessionStorage.getItem('token')}` }

            
    // let upvalue = qty + 1
    // setqty(upvalue)
   
    const newUpdata = { ...updata, id: id, quantity: qt-1
    };
    setupdata(newUpdata);
    console.log("quanttity==", updata);
    const update = await upcart(newUpdata,header) 
    console.log("result===",update);
    let up=update.config.data
    setstatus(!status)

    
   



  }
  const handledelte=async(id)=>{

    const result= await removeitem(id)
    

    if(result.status==200){
      toast.success("Product Delete Successfully")
      setstatus(!status)
      
    }
    else{
      toast.error(result.responce)
    }
   

  }
  


  return (

    <>
      <Payhead1 car/>
      <div className='mt-5'>
        <div>
          <Row className='g-0'>
            <Col md={9}>
              <div className='ms-5 p-5 shadow'>
                <table className='table table-borderd  '>
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
                                <p className='text-secondary'>{item.productId?.brand}</p>
                                <p className=''>{item.productId?.description}</p>
                              </div>
                            </div>
                          </td>
                          <td>{item.productId?.price}</td>
                          <td>
                            {
                              item.productId?
                                <div>
                                <button className='btn' onClick={()=>handleupdate(item._id,item.quantity)}><i className="fa-solid fa-plus"></i></button>
                              {item.quantity}
                              <button className='btn' onClick= {()=>handldecrese(item._id,item.quantity)}><i className="fa-solid fa-minus"></i></button>
                              
  
                                </div>:
                                null
                            

                            }
                            
                             
                            
                          

                            
                            
                            
                            
                            </td>
                          {/* <td>{totalquty}</td> */}
                          <td>
                            {
                              item.productId?
                              <div>
                            <button className='btn' onClick={()=>handledelte(item._id)}><i className="fa-solid fa-trash" style={{ color: " #ff0000" }}></i></button>

                                
                              </div>:null
                            }
                            </td>

                        </tr>

                      ))
                    }
                   


                  </tbody>
                </table>


              </div>
            </Col>
            <Col md={3}>
              <div className='p-2 shadow'>
                <div className='p-5'><h2>Cart Summery</h2>
                  <p>Total price <span className='ms-4'>{total}</span></p>
                  <p>Shipping <del className='text-secondary'>58</del><span className='text-success ms-3'>free</span></p>
                  <hr />
                  <h5>Total <span>{total}</span></h5>
                </div>
                <div className='d-grid' >
                  <Link className='d-grid text-decoration-none'   state={data} to={'/confirm'}>
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