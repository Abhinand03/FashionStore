import React, { useContext, useEffect, useState } from 'react'
// import img from '../image/logo1.png'
import './head.css'
import DropD from './Dropdown/DropD'
import { Link, useNavigate } from 'react-router-dom'
import { adtocart, cartcount } from '../../service/allapi'
import { serchcontext } from '../context/Context'
import { headstatus } from '../context/Context'



function Header() {
  const {search,setsearch}=useContext(serchcontext)
  const {headSt, setheadSt}=useContext(headstatus)

  const [count, setcount] = useState(0)
  const [status, setstatus] = useState(false)

  const [user, setuser] = useState(false)
  const handlechnage = () => {
    setuser(true)
  }
  const handlechnage2 = () => {
    setuser(false)

  }
  const navigate = useNavigate()
  const cart = () => {

    const exituser = sessionStorage.getItem('token')

    if (exituser) {
      navigate('/cart')

    }
    else {
      navigate('log')
    }

  }
  useEffect(() => {
    handlecartcount()
  }, [headSt])

  const handlecartcount = async () => {
    const header = { "Authorization": `Bearer ${sessionStorage.getItem('token')}` }
    const count = await cartcount(header)
    setcount(count.data)






  }
  console.log(search);
  return (
    <>



      <nav className="navbar bg-light shadow navbar-expand-lg p-3 ">
        <div className="container-fluid">
          <a className="navbar-brand " href="#">Fashion<span className='bg-warning badge text-dark'>Sotre</span></a>
          <div className='log'>

            <div className="nav-item me-3 li-inp inp4">
              <input type="text" name="" id="" className='inp' onChange={(e)=>{setsearch(e.target.value)}} placeholder='Search For Poducts,Brand and more' /><button className='inp-btn'><span className='ser'>Search</span><i className="fa-solid fa-magnifying-glass mx-2"></i></button>
            </div>
            <div className="nav-item me-2 icon2  ">
              <a className="nav-link icons" onMouseEnter={handlechnage} aria-current="page" ><i className="fa-solid fa-user-tie fa-xl"></i></a>
            </div>
            <di className="nav-item me-2 icon2 icon3" >
              <a className="nav-link icons" onClick={cart} aria-current="page" ><i class="fa-solid fa-cart-shopping fa-xl"> </i><sup><span className='badge bg-danger'>{count}</span></sup></a>

            </di>

          </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title text-danger" id="offcanvasNavbarLabel">FASHION STORE</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body ">


              <ul className="navbar-nav  navbar-right justify-content-start ul1   flex-grow-1 pe-3">
                <li class="nav-item me-3">


                  <a className="nav-link na-cont" aria-current="page" href="/">HOME</a>
                </li>
                <li className="nav-item me-3">
                  <Link className="nav-link na-cont" to={'/cat'} state={'men'}>
                    MEN

                  </Link>
                </li><li className="nav-item me-3">
                <Link className="nav-link na-cont" to={'/cat'} state={'women'}>
                    WOMEN

                  </Link>
                </li>
                <li className="nav-item me-3">
                <Link className="nav-link na-cont" to={'/cat'} state={'kid'}>
                    KIDS

                  </Link>
                </li>


              </ul>
              <ul className="navbar-nav  navbar-right justify-content-end side-inp flex-grow-1 pe-3">
                <li className="nav-item me-3 li-inp">
                  <input type="text" name="" id="" className='inp' onChange={(e)=>{setsearch(e.target.value)}} placeholder='Search For Poducts,Brand and more' /><button className='inp-btn'><span className='ser'>Search</span><i className="fa-solid fa-magnifying-glass mx-2"></i></button>
                </li>
                <li className="nav-item me-2 ">
                  <a className="nav-link icons" aria-current="page" onMouseEnter={handlechnage} href="#"><i className="fa-solid fa-user-tie fa-xl"></i></a>


                </li>

                <li className="nav-item me-2 " style={{ cursor: "pointer" }}>
                  <a className="nav-link icons" onClick={cart} aria-current="page"><i class="fa-solid fa-cart-shopping fa-xl"> </i><sup><span className='badge bg-danger'>{count}</span></sup></a>

                </li>
              </ul>
              <div>

              </div>



            </div>

          </div>


        </div>
      </nav>
      {
        user &&
        <div onMouseLeave={handlechnage2} className='w-100'>
          <DropD />

        </div>





      }
      <div className='inp3'>
        <input type="text" name="" id="" className='inp inp6 ' placeholder='Search For Poducts,Brand and more' /><button className='inp-btn'>Search<i className="fa-solid fa-magnifying-glass mx-2"></i></button>


      </div>



    </>
  )
}

export default Header