import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { userorder } from '../../../service/allapi'
import './ord.css'
import base_url from '../../../service/base_url'

function Orderlist() {
  const [ordedata, setorderdata] = useState([])

  useEffect(() => {
    getorder()


  }, [])

  const getorder = async () => {
    const header = { "Authorization": `Bearer ${sessionStorage.getItem('token')}` }

    const result = await userorder(header)
    console.log(result.data);
    if (result.status == 200) {
      setorderdata(result.data)
    }
    else {
      //   console.log(result);
      navigate('/log')

      alert(result.response.data)
    }




  }
  console.log(ordedata);
  return (
    <>
      <Header />
      {ordedata.length > 0 ?
        <h2 className='or-h1'>My orders</h2> :
        <p></p>



      }


      <div className='d-flex justify-content-center mt-5 flex-column '>
        {
          ordedata.length > 0 ? ordedata.map(item => (
            <div className='m-cont  mt-4 p-4'>

              <div className='content'>
                <img style={{ width: "5rem" }} src={item.image ? `${base_url}/uploads/${item.image}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHBp3gsQdFjO_r7zsVr0d-gs8n86rXGbmp3w&s"} alt="" />
                <div>
                  <p className='or-p2'>{item.title}</p>
                  <p className='or-p1'>Brand:{item.brand}</p>
                  <p className='or-p1'>QTY:{item.quantity}</p>


                </div>
                <p>₹{item.price}</p>
                <p>{item.paymentmode}</p>
                <p>delivery on 4 may</p>
              </div>
            </div>

          )) :

            <h3 className='text-center mt-5 text-danger'>Please Buy Somthing....!</h3>





        }


      </div>
    </>
  )
}

export default Orderlist