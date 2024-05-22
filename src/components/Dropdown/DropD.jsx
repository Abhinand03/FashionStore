import React, { useEffect, useState } from 'react'
import '../Dropdown/Drop.css'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

function DropD() {
    const [user,setuser]=useState("")
    useEffect(()=>{
        setuser(sessionStorage.getItem('user'))
    },[])
    const logout=()=>{
        sessionStorage.clear()
        toast.error(" successfully log outed")
    }
    return (
        <>
            <div>
                <div className='drop'>
                    <div className='drop2 p-2'>
                        <ul className='d-ul '>
                            <div className=' intro1 shadow '>
                                {
                                user? <li className='mt-2 use' >{user}</li>:
                                <li className='mt-2 use' >welcome</li>
                                }
                                {/* <li>To access account and manage orders</li> */}
                                {
                                    user?<li className='mt-2'><Link className='btn btn-outline-danger btn-log' onClick={logout}>log Out</Link></li>:
                                    <li className='mt-2'><Link className='btn btn-outline-success btn-log' to={'/log'}>Login/SignUP</Link></li>
                                }
                                
                                {/* <li><button className='btn btn-danger'>Logout</button></li> */}

                            </div>

                            <li className='mt-3 pr-cont'><Link to={'/profile'}  className='text-decoration-none '>profile</Link></li>
                            {/* <li className='mt-3 pr-cont'>Edit Profile</li> */}
                            <li className='mt-3 pr-cont'> <Link className='text-decoration-none '>Cart</Link></li>
                            <li className='mt-3 pr-cont'><Link className='text-decoration-none '>Orders</Link></li>
                         

                        </ul>


                    </div>

                </div>
            </div>
        </>
    )
}

export default DropD