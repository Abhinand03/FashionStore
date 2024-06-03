import React, { useContext, useEffect, useState } from 'react'
import Header from '../../components/Header'
import Banner from '../../components/banner/Banner'
import ProCard from '../../components/Productcard/ProCard'
import { allproduct } from '../../../service/allapi'
import { serchcontext } from '../../context/Context'

function Landing() {
  const {search,setsearch}= useContext(serchcontext)
  const [product, setproduct] = useState([])
  const [status,setstatus]=useState(false)

  useEffect(() => {

    handleget()
  }, [search])

  const handleget = async () => {
    const result = await allproduct(search)
    // console.log(result);
    if (result.status == 200) {
      setproduct(result.data)
      setstatus(!status)
    }
    else {
      console.log(result.response.data);


    }
  }
  console.log(search);

  console.log(product);
  return (
    <>
      <Header />
      <Banner search={search}/>
      <h1 className='text-center mt-4 text-danger'>New Arrivals</h1>
      <div className='d-flex justify-content-center  flex-wrap g-0'>
        {
          product.length>0?product.map(item=>(
          <ProCard product={item}/>


          )):
          <h1>No Product avilable</h1>

        }



      </div>

      <div>

      </div>



    </>

  )
}

export default Landing