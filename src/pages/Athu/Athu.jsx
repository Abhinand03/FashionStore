import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import GoogleButton from 'react-google-button'
import './athu.css'
import { ToastContainer, toast } from 'react-toastify';
import { userRegister, userlogin } from '../../../service/allapi';
import { useNavigate } from 'react-router-dom';



function Athu() {
    const navigate=useNavigate()
    const [data,setdata]=useState({
        username:'',email:'',password:''
    })
    const [status, setstatus] = useState(true)
    const chnageStatus = () => {
        setstatus(!status)
    }
    const handleregister=async()=>{
        const {username,password,email}=data
        if(!username||!password||!email){
            toast.warning("Fill properly")
            // alert("Fill properly")

        }
        else{
             const result= await userRegister(data)
             if(result.status==200)
                {
                    setstatus(true)
                    toast.success("Registration successfully completed")
                    // alert("Registration successfully completed")
                }
                else
                {
                   toast.error(result.response.data)
                }
        }
        
    }
    const handleGoogle=()=>{
        window.open("http://localhost:4000/auth/google/callback","_self")
    }

    const handelelogin=async()=>{
        const {email,password}=data
        if(!email||!password)
            {
                toast.warning("Eneter Email or pasword")
            }
            else{
                const result = await userlogin({email,password})
                console.log(result);
                if(result.status==200){
                    sessionStorage.setItem("user",result.data.user)
                    sessionStorage.setItem("token",result.data.token)
                    navigate("/")
                    toast.success("Login successfully")
                    
                }
                else{
                toast.error(result.response.data)
                    
                }
            }

    }
    return (
        <>
            <div className='d-flex justify-content-center align-items-center w-100 main-body' style={{ height: '100vh' }}>
                <div className=' sig p-4'>
                    <Row>
                        <Col sm={12} md={12}>
                            {
                                status ?
                                    // <div className='w-100 d-flex justify-content-center'>
                                        <h3 className='bg-warning text-white log-h'>Login</h3>

                                    // </div>


                                    :
                                    <h3 className='text-center text-white  bg-success log-h2'>Register</h3>
                            }
                        </Col>
                        <Col sm={12} md={12}>
                            {
                                status ?
                                    <h3 className='text-warning'>Welcome Back</h3>

                                    :
                                    <h3 className='text-success'>Start With US</h3>



                            }
                            <div className='mt-5'>
                                {
                                    !status &&
                                    <FloatingLabel controlId="user" label="username" className="mb-3">
                                        <Form.Control type="text" onChange={(e)=>{setdata({...data,username:e.target.value})}} placeholder="Username" className='inp-log' />
                                    </FloatingLabel>
                                }
                                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                                    <Form.Control type="email" onChange={(e)=>{setdata({...data,email:e.target.value})}} placeholder="name@example.com" className='inp-log' />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingPassword" label="Password">
                                    <Form.Control type="password" onChange={(e)=>{setdata({...data,password:e.target.value})}} placeholder="Password" className='inp-log' />
                                </FloatingLabel>

                            </div>
                            <div className='mt-4'>

                                {
                                    status ?
                                    <div>
                                       <div className='d-grid'>
                                       <button className='btn btn-warning me-3 btn-block log-btn' onClick={handelelogin} type='submit' >
                                            <span>Login</span>
                                        </button>

                                       </div>
                                      
                                        
                                        <div className='mt-5 d-flex justify-content-center'>
                                        <GoogleButton onClick={handleGoogle}/>

                                        </div>
                                        
                                       

                                    </div>
                                       
                                        

                                        :
                                        <div className='d-grid'>
                                            <button className='btn btn-success me-3 btn-block log-btn' onClick={handleregister} type='submit' >
                                            <span>Register</span>
                                        </button>

                                        </div>
                                        

                                }
                                <p className='new' onClick={chnageStatus}>
                                    {
                                        status ?
                                            <p className='text-primary text-center not-p'><span className='text-secondary'>Not Registerd ?</span>Create An Account</p> :
                                            <p className='text-center text-primary mt-3'>Already a User</p>
                                    }
                                </p>
                            </div>
                        </Col>
                    </Row>

                </div>
            </div>
            <ToastContainer/>


        </>
    )
}

export default Athu