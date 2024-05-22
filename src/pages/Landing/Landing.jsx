import React from 'react'
import Header from '../../components/Header'
import Banner from '../../components/banner/Banner'
import ProCard from '../../components/Productcard/ProCard'

function Landing() {
  return (
    <>
      <Header />
      <Banner />
      <h1 className='text-center mt-4 text-danger'>New Arrivals</h1>
      <div className='d-flex justify-content-center  flex-wrap'>

        <ProCard />
        <ProCard />
        <ProCard />
        <ProCard />
        <ProCard />
        <ProCard />
        <ProCard />
        <ProCard />


      </div>

      <div>

      </div>



    </>

  )
}

export default Landing